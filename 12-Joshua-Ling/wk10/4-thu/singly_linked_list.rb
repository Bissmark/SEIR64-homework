#more efficient to put things in the beginning than the end

class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value)    #aka unshift
    node = Node.new value
    node.next = @head
    @head = node
    self #this allows chaining
  end

  def append(value)     #aka push
    if !@head
      @head = Node.new value
      return self
    end
    last.next = Node.new value
    self #this allows chaining
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node
  end

  def pop
    if (!@head.next) 
      return self.remove
    end
    second_last = @head
    last = @head.next
    while last.next 
      second_last = last
      last = last.next
    end
    second_last.next = nil
    self
  end 

  #TODO: more methods
  def remove   #remove first node  AKA shift
    @head = @head.next
    self
  end

  def insert_after(node, new_value)
    current_node = self.find(node)
    if !current_node 
      return nil
    end
      new_node = Node.new(new_value) unless new_value.nil?
      new_node.next = current_node.next
      current_node.next = new_node
      self
  end

  def find(value)  #return node with value (or nil)
    current_node = @head
    while current_node && current_node.next && current_node.value != value
      current_node = current_node.value
    end
      if current_node.value != value
        return nil
      end
    current_node
  end

  def reverse   #  non destructive ABC => CBA
    newList = SinglyLinkedList.new @head.value
    
    current_node = @head
    until !current_node.next
      newList.prepend current_node.next.value
      current_node = current_node.next
    end
    newList
  end

  def reverse!  #destructive!
    newList = SinglyLinkedList.new self.last.value
    current_node = self.last
    while current_node != @head
      self.pop    
      current_node = self.last
      newList.append current_node.value
    end
    self.pop
    current_node = newList.head
    self.append current_node.value
    until !current_node.next
      self.append current_node.next.value
      current_node = current_node.next
    end
    
    self
  end

  def each   #bros.each do     ...   end   

  end

  #bonus .map, .reduce, .select, .reject, .length
  #bonus: bros.at_index(3)
end


bros = SinglyLinkedList.new 'Groucho'
bros.append 'bob'
bros.append 'fred'

binding.irb
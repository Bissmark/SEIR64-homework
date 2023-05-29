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
        @head = Node.new(value) unless  value.nil?
    end

    def prepend(value)
        node = Node.new value
        node.next = @head
        @head = node
        self
    end

    def append
        last.next = Node.new value
    end

    def last
        current_node = @head
        while current_node && current_node.next
            current_node = current_node.next 
        end
        current_node
    end
end

bros = SinglyLinkedList.new
bros = SinglyLinkedList.new 'Goucho'

binding.irb
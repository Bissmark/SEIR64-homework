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

    def prepend(value)
        node = Node.new(value)
        node.next = @head
        @head = node
        self
    end

    def append (value)
        last.next = Node.new value
        self
    end


    def last
        current_node = @head
        while current_node && current_node.next
            current_node = current_node.next
        end
        current_node
    end

    def first
        first = @head
        first
    end
    # TO DO

    def remove

        if @head

            current_node = @head
            previous_node = nil
            while current_node.next
                previous_node = current_node
                current_node = current_node.next
            end
            
            if previous_node
                previous_node.next = nil
                current_node
            else
                @head = nil
                current_node
            end

        else
            puts "There are no nodes to remove"
        end

    end

    def insert_after(nodeNum, value)

        node = Node.new(value)

        if !@head
            @head = node
            return
        end

        if nodeNum == 0 
            current = @head
            node.next = current.next
            @head = node
            return
        end

        previous = nil
        current = @head
        count = 0

        while current

            if count == nodeNum 
                previous.next = node
                node.next = current
                return
            end

            count = count + 1
            previous = current
            current = current.next

        end

        return previous.next = node
    end

    def find(needle) #return the node with the value of the needle

        current = @head

        while current
            
            if current.value == needle
                return current
            end
            current = current.next
        end

        puts "No nodes exist with value '#{needle}'"

    end

    def reverse #non-destruvtive

        current = @head
        bros_reversed = SinglyLinkedList.new
    
        while current
            bros_reversed.prepend(current.value)
            current = current.next
        end

        bros_reversed.first
    end

    def reverseDestructive

        current = @head
        previous_node = nil
        next_node = nil

        while current 
            next_node = current.next
            current.next = previous_node
            previous_node = current
            current = next_node
            next_node = nil
        end
        @head = previous_node

        first
    end

    def each #tickey
        # somehing that is like: 
        # bros.each do |i|

        # end

    end

    # .map, .reduce, .length, 






end

bros = SinglyLinkedList.new
bros = SinglyLinkedList.new 'Mark'

binding.irb
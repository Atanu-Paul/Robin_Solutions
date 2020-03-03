# Q2: Reverse a Doubly linked list using recursion
import math
class Node:
  def __init__(self,data):
    self.data=data
    self.next=None

def getNode(data):
  new_node=Node(data)
  new_node.data=data
  new_node.next=new_node.prev=None
  return new_node

def push(head_ref,new_node):
  new_node.prev=None
  new_node.next=head_ref
  if (head_ref != None):
    head_ref.prev=new_node
  head_ref=new_node
  return head_ref

def Reverse(node):
  if not node:
    return None
  temp = node.next
  node.next=node.prev
  node.prev=temp
  if not node.prev:
    return node
  return Reverse(node.prev)

def printList(head):
  while (head != None):
    print(head.data,end = " ")
    head = head.next

if __name__=='__main__':
  head = None
  head = push(head, getNode(2))  
  head = push(head, getNode(4))  
  head = push(head, getNode(8))  
  head = push(head, getNode(10)) 
  print("Original list: ", end = "") 
  printList(head) 
  head = Reverse(head) 
  print("\nReversed list: ", end = "") 
  printList(head) 
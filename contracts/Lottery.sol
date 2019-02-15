pragma solidity ^0.4.0;

contract Lottery{
    //variable to store manager address
    address public manager;
    //0xca35b7d915458ef540ade6068dfe2f44e8fa733c
    
    //storing addresses fo participants
    address[] public participants;
    
   constructor () public {
        manager =msg.sender;
    
    }
    
    //function to enter the lottery,we are going to make each users
    //pay a small amount to enter the lottery
    function enterlottery() public payable{
        require (msg.value > 0.01 ether);
        participants.push(msg.sender);
    }
    
    function pickWinner () public {
       //check only that manager call the function
        require(msg.sender == manager);
      
      // random selection of participants
      uint index = random() % participants.length;
      
      //transfer balance to winner
      participants[index].transfer(this.balance);
      
      //empty the addres array
      participants = new address[](0);
    }
    
    function random () private  view returns(uint256) {
        
        return uint(keccak256(block.difficulty, now, participants));
    }
        
    
}
// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/IERC721.sol)
pragma solidity ^0.8.17;

contract MyLife {

    //mapping for token
    mapping(address => string[]) private _addressToToken;

    //mapping for token
    mapping(string => address) private _tokenToAddress;

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (bool)
    {
        _addressToToken[recipient].push(tokenURI);
        _tokenToAddress[tokenURI] = recipient;
        return true;
    }
}
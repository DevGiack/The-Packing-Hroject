// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract TPH is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    using Strings for uint256;
    mapping (uint256 => string) private _tokenURIs;

constructor() ERC721("ThePackingHroject", "TPH") {
    _tokenURIs[1] = "QmVMZ4v2cfhY53Er2Pf4yYBuT7NzBWLnSK3J2sQMjKJbAx";
    _tokenURIs[2] = "QmYarKZsKUGgPxCTosyBLxLHAMU7gbvobrvPr4SuFqi68o";
    _tokenURIs[3] = "QmdSdvpAw7cedjvnnPAGcsG7AdzPxYHNqxK6CWqW1Kc6se";
    _tokenURIs[4] = "QmSLRvNf4y2DgGYnMwW5KBgwr5Gg7PrFQcTMBUswKKEHBy";
    _tokenURIs[5] = "QmWeTGtMZLGcZyEgPhc58aYm4Yk1j4RGc8TjLz4VwVw8UM";
    _tokenURIs[6] = "QmR7NQYaj3WsxbtHcaSsi3FmHHJLY2T58263iNLKUBSYmo";
    _tokenURIs[7] = "QmNfuAe75uV9qrBMgXznjB32pfs5hr2uhgc6Sxrikx4Lnb";
    _tokenURIs[8] = "QmciYTmmupkFQjYSW6H7XdVnh8ypHvW8WBwmPD33sCQ8vq";
    _tokenURIs[9] = "QmWGW4LGVirJbnzUQiedeX68LjbUgtg3jFwBb4NvV639S7";
    _tokenURIs[10] = "QmTh5RUy3MThe6Jp1FpUsPppzUxxANrP2cAjtnA4ec9ET6";
    _tokenURIs[11] = "QmYRZcPSzBRhyRdf9w4gBAtYRKR5Fp6HHgiWuHYtTnmdtM";
    _tokenURIs[12] = "QmYSfw5HoJqzk3h8gotirD7fK7KEN1vSoNkNuPuKcdU3s5";
    _tokenURIs[13] = "QmUq7q2Xjt4YGF5t51JzNXNSjuArAq74BERDwrqy4SSG5N";
    _tokenURIs[14] = "QmZUvS5kqNeFAH7By3sTAQEfJjJZHQYQHRLDKEc1qMaTdi";
    _tokenURIs[15] = "QmWvWD7ZfLqmW3ZVEtb6jxSLf9yzLtPHLaUt4nS8cTt5gg";
    _tokenURIs[16] = "Qmey9BPD7QQgLwCYsagEGSKzZCwnZwPq9vVLcp9zaATvT6";
    _tokenURIs[17] = "QmUby2SDGJXqHZHKrbeDZT2EHGXKim7vEJwufPHPo3YYbU";
    _tokenURIs[18] = "QmRccoGhNRKjh3JgLLpT7ktPEVZXaTyxcaczDyGE3tJkyd";
    _tokenURIs[19] = "QmWhLenxrsNbfNfincsJnbFJSSo8Xo4NtkniqRueCZLYoj";
    _tokenURIs[20] = "QmQRyrayYLmUnhwLAex8a85uML8qYxLpwrquPrH3ox9dA3";
    _tokenURIs[21] = "QmSPyGfqrJwzzBjkVdkbSsBf5DEPs2shet9AcogRRJWGFm";
    _tokenURIs[22] = "QmYmTanwYpZDfPys8NPQTsU3puU1PKAGxYosceCAk2PMjB";
    _tokenURIs[23] = "Qmf9UnVwUcbrFJNLLoMovHM59Kx1FbB2hsDgMLN7EzvvUZ";
    _tokenURIs[24] = "QmRVsUoinkR6rbG31xLRpvfh6zK97S8Uedk4YLTA4Ss59j";
    _tokenURIs[25] = "QmP2m51p7Q5W2Qb85jkkkJvbtA6PrQnSxr32WVqwPPsmXW";
    _tokenURIs[26] = "QmUavR4PkJ4zSkDAx1LywbXCRMz9bRnFr9HsNiz3s4gTgE";
    _tokenURIs[27] = "QmVznarXpTpDsarLhqvx6mkuPRRW9BCXkypdiQ4VYPLfUK";
    _tokenURIs[28] = "QmUyauxRLpz9T8wD9cvPdVu1fJenKVJ1cSgUXiCPEwdbeW";
    _tokenURIs[29] = "QmYBgCPSjQ7WMk4vXyN9RBqdN5tiEK8wiYFLMg1BrCAokq";
    _tokenURIs[30] = "QmYTDHmVFc3HZApGCDiabSq4RE7u7sDWNQVbktPV6pm8yK";
    _tokenURIs[31] = "QmU8jxNUyrkiCvMTXXiUuZej4niQefc6KQ1uVtfPrkDfhS";
    _tokenURIs[32] = "QmeV5DwESAxEJhQAwAPtMLiYj8ytjtyEaNxu15bHDyyMfR";
    _tokenURIs[33] = "QmTkfu6mZJa4ZdHwUBbJvyvCgoq8qKgibcMAnn3r5XNqbv";
    _tokenURIs[34] = "QmYgt9CSrZcxfKLiGUUHxYGQLftHWzfcSnbeBGEstYdaDC";
    _tokenURIs[35] = "QmdrxA5vXHxNeL2ukQGJRFCtYr7EL1yEBykmZ4P89R5hd9";
    _tokenURIs[36] = "QmQBpRqPkTZx4A6R2CsfU8DA7ufjRZUP7QvBsmij964Lu1";
    _tokenURIs[37] = "QmU5EQGMDpJyueR6iDfTfeuxA33EcvK9Waipa3qa3apniN";
    _tokenURIs[38] = "QmZdHM7oWsqPHR2rjuWQJQ3usfsqP1wSD15pEvbHibsvS3";
    _tokenURIs[39] = "QmaZ543deJT6nfWLCJsBgsYmA1btxouPYXUKYNPjXskmG4";
    _tokenURIs[40] = "QmPqH6VkG7zMgeyWDqadnJ3UPLQQXSPsnCd16sj3FHrGa7";
    _tokenURIs[41] = "QmQzmRWREfqXQfEDuo4hzdezzMWzKHGDwYLk7DhDDPnmFA";
    _tokenURIs[42] = "QmW4jVdAZWanNDn7go9ygQ17keqejAmiUdjvL6akudtPnG";
    _tokenURIs[43] = "QmfVWHHZNEgAVQoVwAukpdzz17E6c5izJszGFBXTYgD4tF";
    _tokenURIs[44] = "QmRzA8hPJLuyPpS4hz98qa7LRsAKrNu9qi3UdxUkNpmTtS";
    _tokenURIs[45] = "QmcRffrHAcQCFqQhEgXbNWcqU7CfCP43Czsxn6K3bHrodv";
    _tokenURIs[46] = "QmZJDmHGb2A7kywb6A2rgHYwgLB3LQj1v5wCQQ2D1SK5gE";
    _tokenURIs[47] = "QmeE1jCSrYB6ZdKaQ8zAZT3TF9Co9eZCTDHXtrKdQQuRcy";
    _tokenURIs[48] = "QmRuPkr1HnxAhcmpwDvfX7bidFKG1M5a4gNDBwqMHozPC6";
    _tokenURIs[49] = "QmVZDmgX5FJG3oirfhyVB4NRvwyFTF481h3aGhaCKCX8qY";
    _tokenURIs[50] = "QmUjfJBgkFBB5fnaHA2cnCDoURJ88JUGbvo3S46HQ8wa9H";
}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }


    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function getCounter() public view returns (uint256) {
        return _tokenIdCounter.current();
    }


    // The following functions are overrides required by Solidity.

        function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
            require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

            string memory _tokenURI = _tokenURIs[tokenId];
            string memory base = _baseURI();
            
            // If there is no base URI, return the token URI.
            if (bytes(base).length == 0) {
                return _tokenURI;
            }
            // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
            if (bytes(_tokenURI).length > 0) {
                return string(abi.encodePacked(base, _tokenURI));
            }
            // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
            return string(abi.encodePacked(base, tokenId.toString()));
        }
}
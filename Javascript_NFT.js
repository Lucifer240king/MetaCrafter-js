const NFT_COLLECT = [];

function mintNFT(name, gender, occupation) {
    const NFT = {
        name: name,
        gender: gender,
        occupation: occupation
    };
    NFT_COLLECT.push(NFT);
    console.log("Minted " + name);
}

//Listing Nft
function listNFTs() {
    for (let i = 0; i < NFT_COLLECT.length; i++) {
    	console.log("\n|-------------------------------------------------")
        console.log("|ID: \t\t\t" + (i + 1));
        console.log("|Name: \t\t\t" + NFT_COLLECT[i].name);
        console.log("|Gender: \t\t" + NFT_COLLECT[i].gender);
        console.log("|Occupation: \t\t" + NFT_COLLECT[i].occupation);
    	console.log("--------------------------------------------------")
    }
}

//Total number of NFT on NFT_COLLECT Currently
function getTotalSupply() {
    console.log("\nTotal :" + NFT_COLLECT.length);
    console.log("\n");

}


mintNFT("Rohit", "Male", "Office Worker");
mintNFT("Gaurav", "Male", "Lawyer");
mintNFT("Ram", "Male", "Graphic Designer");
mintNFT("Lav", "Male", "IAS");
mintNFT("Singh", "Male", "Firefighter");

listNFTs();

getTotalSupply();

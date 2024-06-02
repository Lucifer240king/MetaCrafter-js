const NFT_COL = [];

function mintNFT(name, gender, occupation) {
    const NFT = {
        name: name,
        gender: gender,
        occupation: occupation
    };
    NFT_COL.push(NFT);
    console.log("Minted " + name);
}

//Listing Nft
function listNFTs() {
    for (let i = 0; i < NFT_COL.length; i++) {
    	console.log("\n----------------------------------------------------------------")
        console.log("\nID: \t\t\t" + (i + 1));
        console.log("Name: \t\t\t" + NFT_COL[i].name);
        console.log("Gender: \t\t" + NFT_COL[i].gender);
        console.log("Occupation: \t\t" + NFT_COL[i].occupation);
    	console.log("----------------------------------------------------------------")
    }
}

//Total number of NFT on NFT_COL Currently
function getTotalSupply() {
    console.log("\nTotal :" + NFT_COL.length);
}


mintNFT("Rohit", "Male", "Office Worker");
mintNFT("Gaurav", "Male", "Lawyer");
mintNFT("Ram", "Male", "Graphic Designer");
mintNFT("Lav", "Male", "IAS");
mintNFT("Singh", "Male", "Firefighter");

listNFTs();

getTotalSupply();

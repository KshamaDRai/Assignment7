const ethers = require('ethers');

const providerUrl = 'https://<network>.infura.io/v3/YOUR-PROJECT-ID'; 
const provider = new ethers.providers.JsonRpcProvider(providerUrl);
const contractAddress = 'D:\NITK\Grade.sol'; 
const abi = [...]; // gotten by using 'solcjs Grade.sol --abi'


const contract = new ethers.Contract(contractAddress, abi, provider);
async function addGrade(studentName, subject, grade) {
    try {
        const tx = await contract.addGrade(studentName, subject, grade);
        await tx.wait(); // Wait for the transaction to be mined
        console.log('Grade added successfully!');
    } catch (error) {
        console.error('Error adding grade:', error);
    }
}

// Example usage
addGrade('Alice', 'Math', 90);
async function getAverageGrade(subject) {
    try {
        const average = await contract.averageGrade(subject);
        console.log(`Average grade for ${subject}: ${average}`);
    } catch (error) {
        console.error('Error getting average grade:', error);
    }
}

// Example usage
getAverageGrade('Math');

import path from 'node:path';
import { readFileSync } from 'node:fs';

const gendiff = (filepath1, filepath2) => {
    const fullFilepath1 = path.resolve(filepath1) 
    const fullFilepath2 = path.resolve(filepath2)
    const file1 = readFileSync(fullFilepath1);
    const file2 = readFileSync(fullFilepath2);
    const file1Json = JSON.parse(file1);
    const file2Json = JSON.parse(file2);
    
    
    console.log(file1Json);
    console.log(file2Json);
};

export default gendiff; 


const mapping = [{
    letter: 'a',
    siblings: ['a', 'b', 'd']
},
{
    letter: 'b',
    siblings: ['a', 'b', 'c', 'e']
},
{
    letter: 'c',
    siblings: ['b', 'c', 'f']
},
{
    letter: 'd',
    siblings: ['a', 'e', 'd']
},
{
    letter: 'e',
    siblings: ['b', 'd', 'e', 'f', 'h']
},
{
    letter: 'f',
    siblings: ['f', 'c', 'e','i']
},
{
    letter: 'g',
    siblings: ['g', 'd', 'h']
},
{
    letter: 'h',
    siblings: ['e', 'h', 'g', 'i', 'j']
},
{
    letter: 'i',
    siblings: ['f', 'h', 'i']
},
{
    letter: 'j',
    siblings: ['j', 'h']
}]

function printResult(res) {
    res.forEach(r => console.log(r));
}

function crack(code, index = 0, result = ['']) {

    const siblingLetters = mapping.find(map => map.letter === code[index]);

    if (!siblingLetters) {
        throw new Error(`letter ${code[index]} does not exist in pad`);
    }

    const temporary = [];
    result.forEach(prefix => {
        siblingLetters.siblings.forEach(sibling => {
            temporary.push(prefix + sibling);
        });
    });
    
    return index === code.length - 1 ? temporary : crack(code, index + 1, temporary);
}

function crackCode(code) {
    return crack(code.split(''));
}

crackCode("ab");

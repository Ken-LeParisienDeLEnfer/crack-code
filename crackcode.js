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

function crackCode(code) {
    let result = null;
    code.split('').forEach(letter => {
        const siblingLetters = mapping.find(map => map.letter === letter);
        if(!siblingLetters) {
            throw new Error(`letter ${letter} does not exist in pad`);
        }
        if (!result) {
            result = siblingLetters.siblings;
        } else {
            let temporary = [];
            result.forEach(el => {
                siblingLetters.siblings.forEach(sl => {
                    temporary.push(el + sl);
                })
            });
            result = temporary;
        }  
    });
    return result;
}

console.time();
crackCode("cdfabd");
console.timeEnd();
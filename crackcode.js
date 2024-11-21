const mapping = [{
    letter: 'a',
    sibblings: ['a', 'b', 'd']
},
{
    letter: 'b',
    sibblings: ['a', 'b', 'c', 'e']
},
{
    letter: 'c',
    sibblings: ['b', 'c', 'f']
},
{
    letter: 'd',
    sibblings: ['a', 'e', 'd']
},
{
    letter: 'e',
    sibblings: ['b', 'd', 'e', 'f', 'h']
},
{
    letter: 'f',
    sibblings: ['f', 'c', 'e','i']
},
{
    letter: 'g',
    sibblings: ['g', 'd', 'h']
},
{
    letter: 'h',
    sibblings: ['e', 'h', 'g', 'i', 'j']
},
{
    letter: 'i',
    sibblings: ['f', 'h', 'i']
},
{
    letter: 'j',
    sibblings: ['j', 'h']
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
            result = siblingLetters.sibblings;
        } else {
            let temporary = [];
            result.forEach(el => {
                siblingLetters.sibblings.forEach(sl => {
                    temporary.push(el + sl);
                })
            });
            result = temporary;
        }

        

        
    });
    printResult(result);
}


crackCode("abcd");
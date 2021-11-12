/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* New skills
* ------------------
*
* Goal: Make sure that `johnDoe` can build his impressive resume. Do not use classes.
* 
* Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
*/

interface Singer {
    sing(): string;
}

interface Dancer {
    dance(): string;
}

interface Teacher {
    teach(): string;
}

type SkilledPerson = Singer & Dancer & Teacher;

const johnDoe: SkilledPerson = {
    dance(): string {
        return 'I can dance!';
    },
    sing(): string {
        return 'I can sing!';
    },
    teach(): string {
        return 'I can teach!';
    },
}

function buildResume(person: SkilledPerson) {
    const skills = [
        person.dance(),
        person.sing(),
        person.teach()
    ]
    return skills;
}

/* Do not modify tests */

test('should build an impressive resume', () => {
    const resume = buildResume(johnDoe)
    expect(resume).toStrictEqual([
        'I can dance!',
        'I can sing!',
        'I can teach!'
    ])
})

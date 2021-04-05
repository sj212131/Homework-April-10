const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe ("Initialization", () => {
        it("Should be received github link", () => {
            const testGithub = "sj212131";
            const githubTest = new Engineer("Test", 10, "Gil@email.com", testGithub);
            
            expect(githubTest.github).toBe(testGithub)
        })

        it("Should received Title 'Engineer'", () => {
            const testTitle = 'Engineer';
            const titleTest = new Engineer("Test", 10, "Gil@email.com", "Github.com");
            
            expect(titleTest.title).toBe(testTitle)
        })
    })
})
const Inter = require("../lib/intern");

describe("Inter", () => {
    describe ("Initialization", () => {
        it("Should be received email", () => {
            const testEmail = "test@email.com";
            const emailTest = new Inter("Test", 10, "test@email.com", "School");
            
            expect(emailTest.email).toBe(testEmail)
        })

        it("Should received Title 'Inter'", () => {
            const testTitle = 'Intern';
            const titleTest = new Inter("Test", 10, "test@email.com", "School");
            
            expect(titleTest.title).toBe(testTitle)
        })
    })
})
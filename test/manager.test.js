const Manager = require("../lib/manager");

describe("Manager", () => {
    describe ("Initialization", () => {
        it("Should be received email", () => {
            const testEmail = "test@email.com";
            const emailTest = new Manager("Test", 10, "test@email.com", "School");
            
            expect(emailTest.email).toBe(testEmail)
        })

        it("Should received Title 'Inter'", () => {
            const testTitle = 'Manager';
            const titleTest = new Manager("Test", 10, "test@email.com", "School");
            
            expect(titleTest.title).toBe(testTitle)
        })
    })
})
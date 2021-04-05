const Employee = require("../lib/employee");

describe("Employee", () => {
    describe ("Initialization", () => {
        it("Should be received name", () => {
            const testName = "Dwyane";
            const newManager = new Employee("Dwyane", 10, "test@email.com");
            
            expect(newManager.getName()).toBe(testName)
        })

        it("Should be received id", () => {
            const testID = 10;
            const newManager = new Employee("Dwyane", 10, "test@email.com");
            
            expect(newManager.getId()).toBe(testID)
        })

        it("Should be received email", () => {
            const testEmail = "test@email.com";
            const newManager = new Employee("Dwyane", 10, "test@email.com");
            
            expect(newManager.getEmail()).toBe(testEmail)
        })

        it("Should be received email", () => {
            const testTitle = "Employee";
            const newManager = new Employee("Dwyane", 10, "test@email.com");
            
            expect(newManager.getTitle()).toBe(testTitle)
        })
    })
})
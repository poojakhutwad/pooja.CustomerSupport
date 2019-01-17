export class CustomerSupportModel {
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: number;
    public address: string;
    public city: string;
    public state: string;
    public zipCode: number;
    public comments: string;

    constructor(FirstName, LastName, Email, Phone, Address, City, State, ZipCode, Comments ){
        this.firstName = FirstName;
        this.lastName = LastName;
        this.email = Email;
        this.phone = Phone;
        this.address = Address;
        this.city = City;
        this.state = State;
        this.zipCode = ZipCode;
        this.comments = Comments;
    }
}

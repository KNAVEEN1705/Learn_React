import { render, screen } from "@testing-library/react"; // Import screen
import Contactus from "../Contactus";
import '@testing-library/jest-dom';


test("renders heading in Contact Us component", () => {
    render(<Contactus />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


test("Button in rendered compondent Contact as",()=>{
    render(<Contactus/>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})
test("Input in rendered compondent contact as",()=>{
    render(<Contactus/>);
    const inputBoxes=screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2)
})
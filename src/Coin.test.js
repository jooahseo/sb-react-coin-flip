import {render} from "@testing-library/react";
import Coin from "./Coin";

it("renders without crashing", function(){
    render(<Coin/>)
});

it("matches a snapshot", function(){
    const { asFragment } = render(<Coin/>);
    expect(asFragment()).toMatchSnapshot();
})
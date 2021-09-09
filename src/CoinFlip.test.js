import {render, fireEvent} from "@testing-library/react";
import CoinFlip from "./CoinFlip";

it("renders without crashing", function(){
    render(<CoinFlip/>);
});

it("has no coin image when the page loads", function(){
    const { queryByTestId } = render(<CoinFlip/>);

    expect(queryByTestId("coin-image")).not.toBeInTheDocument();
});

describe("coin image shows", function(){
    beforeEach(function(){
        jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);
    });

    afterEach(function(){
        Math.random.mockRestore();
    });

    it("shows the head image", function(){
        const { queryByTestId, queryByAltText } = render(<CoinFlip/>);
        const flipButton = queryByTestId("flip-button");
        fireEvent.click(flipButton);
        expect(queryByAltText("quarter-head")).toBeInTheDocument();
    });

    it("shows the tail image", function(){
        const { queryByTestId, queryByAltText } = render(<CoinFlip/>);
        const flipButton = queryByTestId("flip-button");
        fireEvent.click(flipButton);
        fireEvent.click(flipButton);
        expect(queryByAltText("quarter-tail")).toBeInTheDocument();
    });
})
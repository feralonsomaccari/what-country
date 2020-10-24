import React from "react";
import {shallow} from "enzyme";
import Footer from "./Footer"

describe("<Footer/>", () => {

    const wrapper = shallow(<Footer></Footer>);

    it("api link should have corrrect href attribute", () => {
        const link = wrapper.find("a#api-link").prop("href");
        expect(link).toBe("https://restcountries.eu/")
    })
    
    it("github link should have correct href attribute", () => {
        //const wrapper = shallow(<Footer></Footer>)
        const link = wrapper.find("a#github-link").prop('href');
        expect(link).toBe("https://github.com/feralonsomaccari/what-country")
    })
})

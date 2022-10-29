import {describe, afterEach, expect, it} from "vitest"
import {renderHook, cleanup, fireEvent, screen, waitFor} from "@testing-library/react"
import useSquadScript from "../libs/useSquadScript";

afterEach(() =>{
    cleanup()
    document.body.innerHTML = ""
})

describe('useSquadScript', () => {
   
    it('should adds the script to the dom', () => {
      renderHook(() => useSquadScript());
      expect(document.getElementsByTagName('script')).toBeDefined();
    });

    it('should Will not load multi inline script', () => {
        renderHook(() => useSquadScript());
        expect(document.getElementsByTagName('script').length).toBe(1);
        expect(document.body.innerHTML).toMatch(new RegExp('https://checkout.squadco.com/widget/squad.min.js'));
    });


    it("should return true", () => {
        const {result} = renderHook(() => useSquadScript());
        expect(result.current).toBe(false);        
        waitFor(() => fireEvent.load(screen.getByTestId('squad-script')));
        expect(result.current).toBe(true);        
    })
  
});
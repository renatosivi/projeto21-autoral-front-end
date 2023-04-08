import styled from "styled-components";
import Logo from "./Logo";

export default function EntryLogo() {
	return (
    <EntryLogoStyles>
      <Logo/>
    </EntryLogoStyles>
	);
}

const EntryLogoStyles = styled.div`
  svg {
    @media (max-width: 450px) {
      width: 200px;
      filter: drop-shadow(0px 0px 4px #000000);
      animation-name: logoTransition;
      animation-duration: 1.5s;
      
      @keyframes logoTransition {
        from {
          width: 190px;
          filter: drop-shadow(0px 0px 0px #000000);
        }
        to {
          width: 200px;
          filter: drop-shadow(0px 0px 4px #000000);
        }
      }
    }
  }
`;
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "@emotion/styled";

interface IProps {
  headerRoutes: Array<{
    path: string;
    name: string;
  }>;
}

const BaseHeader = ({ headerRoutes }: IProps) => {
  const location = useLocation();
  const { pathname } = location;

  // handle check className is active or pending of NavLink
  const classStatusLink = ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) => {
    if (isPending) {
      return "pending";
    }
    if (isActive) {
      return "active";
    }
    return "";
  };

  return (
    <StyledHeader className="base-layout-header">
      <nav>
        <ul>
          {headerRoutes.map((route) => (
            <li key={route.path} className={pathname === route.path ? "active" : ""}>
              <StyledNavLink
                to={route.path}
                className={({ isActive, isPending }) => classStatusLink({ isActive, isPending })}
              >
                {route.name}
              </StyledNavLink>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgb(var(--color-bg-main), 0.8);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 15px;
  border-bottom: 1px solid rgb(var(--color-border-header));
  transition: all 0.3s ease-in-out;

  nav {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: 20px;
        font-weight: 600;
        &:first-of-type {
          font-size: 20px;
          font-weight: 900;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  &.active {
    color: rgb(var(--color-orange-03), 1);
  }
`;

export default BaseHeader;

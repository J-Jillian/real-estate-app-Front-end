import React from "react";
import styled from "styled-components";
import { List } from "../data/InfoData";
import { MdLocationOn } from "react-icons/md";
import { Button } from "./Button";

const Content = styled.div`
  margin-top: 50px;
`;
const Box = styled.div`
  padding: 15px;

  span {
    padding: 4px 15px;
    border-radius: 2px;
    font-weight: 600;
    font-size: 13px;
    display: inline-block;
  }

  i {
    font-size: 20px;
    color: #bec7d8;
  }
`;
const ImgContainer = styled.div`
  padding: 15px;
`;
const Image = styled.img`
  padding: 15px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const BoxText = styled.div`
  padding: 30px;
`;

const RecentCard = () => {
  return (
    <>
      <Content className="content grid3 mtop">
        {List.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <Box className="shadow" ke={index}>
              <ImgContainer className="img">
                <Image src={cover} alt=""></Image>
              </ImgContainer>
              <BoxText className="text">
                <Box className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                </Box>
                <h4>{name}</h4>
                <p>
                  <MdLocationOn />
                  {location}
                </p>
                <div>
                  <Button primary="true">{price}</Button>{" "}
                  <label htmlFor="">/mt2</label>
                </div>
                <span>{type}</span>
              </BoxText>
            </Box>
          );
        })}
      </Content>
    </>
  );
};

export default RecentCard;

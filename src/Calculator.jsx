import React, { useState } from "react";
import { Grid, Box, Container, Button } from "@chakra-ui/react";
import * as math from "mathjs";

export default function Calculator() {
  const [result, setResult] = useState("0");
  return (
    <Container>
      <Grid
        templateColumns="repeat(4, 1fr)" // Defines 4 columns
        templateRows="repeat(6, 1fr)" // Defines 6 rows
        gap={4} // Gap between grid items
        textAlign="center"
        mt="70px"
        backgroundColor="blackAlpha.600"
        p="30px"
      >
        {/* First row, spans all 4 columns */}
        <Box
          gridColumn="1 / span 4"
          gridRow="1"
          border="1px"
          borderColor="gray.300"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#7fdbca"
        >
          {result !== "undefined" && <b>{result}</b>}
        </Box>

        {/* Other grid items */}
        <Box
          gridColumn="1 / span 2"
          gridRow="2"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult("0");
            }}
          >
            <b>clear</b>
          </Button>
        </Box>

        <Box
          gridColumn="3"
          gridRow="2"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                if (prevValue.length > 0) {
                  !result.includes("undefined") &&
                    setResult(prevValue.slice(0, prevValue.length - 1));
                } else {
                  setResult("0");
                }
              });
            }}
          >
            <b>C</b>
          </Button>
        </Box>
        <Box
          gridColumn="4"
          gridRow="2"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "/");
              });
            }}
          >
            <b>/</b>
          </Button>
        </Box>

        <Box
          gridColumn="1"
          gridRow="3"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "7");
              });
            }}
          >
            <b>7</b>
          </Button>
        </Box>
        <Box
          gridColumn="2"
          gridRow="3"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "8");
              });
            }}
          >
            <b>8</b>
          </Button>
        </Box>
        <Box
          gridColumn="3"
          gridRow="3"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "9");
              });
            }}
          >
            <b>9</b>
          </Button>
        </Box>
        <Box
          gridColumn="4"
          gridRow="3"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "*");
              });
            }}
          >
            <b>*</b>
          </Button>
        </Box>

        <Box
          gridColumn="1"
          gridRow="4"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "4");
              });
            }}
          >
            <b>4</b>
          </Button>
        </Box>
        <Box
          gridColumn="2"
          gridRow="4"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "5");
              });
            }}
          >
            <b>5</b>
          </Button>
        </Box>
        <Box
          gridColumn="3"
          gridRow="4"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "6");
              });
            }}
          >
            <b>6</b>
          </Button>
        </Box>
        <Box
          gridColumn="4"
          gridRow="4"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "-");
              });
            }}
          >
            <b>-</b>
          </Button>
        </Box>

        <Box
          gridColumn="1"
          gridRow="5"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "1");
              });
            }}
          >
            <b>1</b>
          </Button>
        </Box>
        <Box
          gridColumn="2"
          gridRow="5"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "2");
              });
            }}
          >
            <b>2</b>
          </Button>
        </Box>
        <Box
          gridColumn="3"
          gridRow="5"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "3");
              });
            }}
          >
            <b>3</b>
          </Button>
        </Box>
        <Box
          gridColumn="4"
          gridRow="5"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "+");
              });
            }}
          >
            <b>+</b>
          </Button>
        </Box>

        <Box
          gridColumn="1"
          gridRow="6"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + "0");
              });
            }}
          >
            <b>0</b>
          </Button>
        </Box>
        <Box
          gridColumn="2"
          gridRow="6"
          border="1px"
          borderColor="gray.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                setResult(prevValue + ".");
              });
            }}
          >
            <b>.</b>
          </Button>
        </Box>
        <Box
          gridColumn="3 /span 2"
          gridRow="6"
          border="1px"
          borderColor="gray.300"
          height="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            h="100%"
            width="100%"
            borderRadius="0"
            bgColor="#7fbdca"
            onClick={() => {
              setResult((prevValue) => {
                if(!result.includes('+') || !result.includes('-') || !result.includes('/') || !result.includes('*')){
                    setResult(math.evaluate(prevValue + '+0'));
                } else {
                    setResult(math.evaluate(prevValue));
                }
              });
            }}
          >
            <b>=</b>
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}

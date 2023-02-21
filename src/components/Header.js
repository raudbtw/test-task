import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import { Button } from "@mui/material";
import { data } from "../data/data.js";
import { padding } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "grey",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Header() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <Container maxWidth="sm">
        <h1>Permissions</h1>
        <p style={{ paddingTop: "-10px" }}>
          Create and customize rules for your interface
        </p>
        <h3 style={{ position: "relative" }}>
          Users
          <span
            style={{
              fontSize: "10px",
              color: "grey",
              padding: "3px ",
            }}
          >
            30
          </span>
        </h3>

        <TextField
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            position: "absolute",
            right: "600px",
            top: "115px",
          }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
      </Container>

      <TableContainer
        sx={{ marginTop: "50px", position: "relative" }}
        component={Paper}
      >
        <Table
          sx={{
            marginTop: "50px",
            marginLeft: "275px",
            maxWidth: "700px",
            maxHeight: "500px",
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <span style={{ fontSize: "20px", marginRight: "5px" }}>
                  Use Name
                </span>
                <SortOutlinedIcon
                  sx={{ fontSize: "20px", bottom: "10px" }}
                  color="default"
                />
              </StyledTableCell>
              <StyledTableCell sx={{ cursor: "pointer" }} align="right">
                View
              </StyledTableCell>
              <StyledTableCell sx={{ cursor: "pointer" }} align="right">
                Execute
              </StyledTableCell>
              <StyledTableCell sx={{ cursor: "pointer" }} align="right">
                Modify
              </StyledTableCell>
              <StyledTableCell sx={{ cursor: "pointer" }} align="right">
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((data) => (
                <StyledTableRow key={data.name}>
                  <StyledTableCell component="th" scope="row">
                    <div>
                      <CircleSharpIcon
                        sx={{ fontSize: "20px", marginRight: "5px" }}
                        color="black"
                      />
                      <span style={{ fontSize: "1.5rem" }}>{data.name}</span>
                    </div>
                    {/* {data.name} */}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Checkbox defaultChecked color="default" />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Checkbox defaultChecked color="default" />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Checkbox defaultChecked color="default" />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Checkbox defaultChecked color="default" />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <span
                      style={{
                        fontSize: "2rem",
                        color: "grey",
                        cursor: "pointer",
                      }}
                    >
                      ...
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        sx={{
          padding: "10px 100px 10px 100px",
          marginTop: "50px",
          marginLeft: "300px",
          marginBottom: "300px",
          backgroundColor: "#bdbdbd",
        }}
        variant="contained"
        size="large"
      >
        Save
      </Button>
    </>
  );
}

export default Header;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    // width: "1680px"
  },
  toolbar: {
    color: '#003f87'
  },
  fontFamily: {
    fontFamily: "Marcellus"
  },
  leaderWidth: {
    width: '150px'
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#003f87',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function Datagrid(props) {
  const classes = useStyles();
  const { tableHeader, rows, setOpenDialog, setContactInfo } = props;

  function handleClick(rowData) {
    setOpenDialog(true);
    setContactInfo(rowData);
  }

  return (
    <TableContainer
      component={Paper}
      elevation={2}
      className={classes.root}
    >
      <ToolBar className={classes.toolbar}>
        <Typography variant="h5" className={classes.fontFamily}>
          {tableHeader}
        </Typography>
      </ToolBar>
      <Table className={classes.table} size="small" aria-label="data table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Unit</StyledTableCell>
            <StyledTableCell>County</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows.length) ? (rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row.Unit}</StyledTableCell>
              <StyledTableCell>{row.County}</StyledTableCell>
              <StyledTableCell>{row.Type}</StyledTableCell>
              <StyledTableCell>{row.Day}</StyledTableCell>
              <StyledTableCell>{row.Time}</StyledTableCell>
              <StyledTableCell>{row.Location}</StyledTableCell>
              <StyledTableCell>{row.Address}</StyledTableCell>
              <StyledTableCell>
                <Button variant="contained" onClick={() => (handleClick(row))}>
                  Contact Info
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          )))
            :
            <StyledTableRow>
              <StyledTableCell colSpan={8} align="center">
                Data Loading...
                        </StyledTableCell>
            </StyledTableRow>}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={8} align="center">
              <Typography>
                To report changes or updates please contact&nbsp;
                                <Link
                  href="Acts2@ec.rr.com"
                  target="_blank"
                  rel="noopener"
                  title="Acts2@ec.rr.com <Brian Snow>"
                >
                  Brian Snow
                                </Link>
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
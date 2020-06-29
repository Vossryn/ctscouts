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

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
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
    const { tableHeader, rows, type } = props;

    return (
        <TableContainer component={Paper} elevation={2}>
            <ToolBar className={classes.toolbar}>
                <Typography variant="h5" className={classes.fontFamily}>
                    {tableHeader}
                </Typography>
            </ToolBar>
            <Table className={classes.table} size="small" aria-label="data table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            {
                                (type === 'cub') ? 'Pack' :
                                    (type === 'boy') ? 'Troop' :
                                        'Ship'
                            }
                        </StyledTableCell>
                        <StyledTableCell className={classes.leaderWidth}>
                            {
                                (type === 'cub') ? 'Cubmaster' :
                                    (type === 'boy') ? 'Scoutmaster' :
                                        'Advisor'
                            }
                        </StyledTableCell>
                        <StyledTableCell>Phone</StyledTableCell>
                        <StyledTableCell>Meeting Place</StyledTableCell>
                        <StyledTableCell>Meeting Day</StyledTableCell>
                        <StyledTableCell>Meeting Time</StyledTableCell>
                        <StyledTableCell>Unit Commissioner Name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell>{row.number}</StyledTableCell>
                            <StyledTableCell>{row.master}</StyledTableCell>
                            <StyledTableCell>{row.phone}</StyledTableCell>
                            <StyledTableCell>{row.meetingPlace}</StyledTableCell>
                            <StyledTableCell>{row.meetingDay}</StyledTableCell>
                            <StyledTableCell>{row.meetingTime}</StyledTableCell>
                            <StyledTableCell>{row.commissioner}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={7} align="center">
                            <Typography>
                                To report changes or updates please contact&nbsp;
                                <Link href="Acts2@ec.rr.com">Brian Snow</Link>
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';

export default function PetTableList(props) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.header_list.map((coluna) => (
                            <TableCell > {coluna} </TableCell>
                        ))}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.dados.map((linha) => (
                        <TableRow key={linha.id}>
                            <TableCell component="th" scope="row">{linha.id}</TableCell>
                            <TableCell align="left">{linha.name}</TableCell>
                            <TableCell align="left">{linha.specie}</TableCell>
                            <TableCell align="left">{linha.race}</TableCell>
                            <TableCell align="left">{linha.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


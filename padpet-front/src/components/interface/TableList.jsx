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
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Especie</TableCell>
                        <TableCell align="right">Raça</TableCell>
                        <TableCell align="right">Idade</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.dados.map((linha) => (
                        <TableRow key={linha.id}>
                            <TableCell component="th" scope="row">{linha.id}</TableCell>
                            <TableCell align="right">{linha.name}</TableCell>
                            <TableCell align="right">{linha.specie}</TableCell>
                            <TableCell align="right">{linha.race}</TableCell>
                            <TableCell align="right">{linha.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


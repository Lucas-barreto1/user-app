import { WrapperTable } from './styles';

const UsersTable = ({currentItens}) => {

    return (
    <WrapperTable>
    <table>
        <thead>
            <tr>
                <th>Idade</th>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
        {currentItens.length > 0 && currentItens.map((user, index) => (
            <tr key={index + user.name}>
                <td>{user.age}</td>
                <td>{user.name}</td>
            </tr>
        ))}
        </tbody>
    </table>
</WrapperTable>
    );
}

export default UsersTable
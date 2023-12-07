function TableItem(car, index) {
    if (index === 0 || index === 8 || index === 6 ||index === 5 ||index >= 11) { return }
    return (
        <tr key={index}>
            <td>{car[0].toUpperCase()}</td>
            <td>{car[1]}</td>
        </tr>
    );
}

export default TableItem;
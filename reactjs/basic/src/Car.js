function Car({ year, make, model})
{
    return <table>
        <tr>
            <td>year</td>
            <td>make</td>
            <td>model</td>
        </tr>
        <tr>
            <td>{year}</td>
            <td>{make}</td>
            <td>{model}</td>
        </tr>
    </table>;
}
  
  //export default Text;
  export default Car;
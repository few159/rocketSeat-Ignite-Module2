import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    },[])

    return(
        <Container>
            <table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Data</th>
                  </tr>
              </thead>

                <tbody>
                    <tr>
                        <td>Dev Web</td>
                        <td className="withdraw">R$ 12.000</td>
                        <td>Dev</td>
                        <td>22/09/2021</td>
                    </tr>
                    <tr>
                        <td>Boa</td>
                        <td className="deposit">R$ 5.000</td>
                        <td>General</td>
                        <td>10/09/2021</td>
                    </tr>
                    <tr>
                        <td>Derrapada</td>
                        <td className="withdraw">R$ 52.000</td>
                        <td>Casa de Massagem</td>
                        <td>01/09/2021</td>
                    </tr>
                </tbody>
            </table>  
        </Container>
    )
}
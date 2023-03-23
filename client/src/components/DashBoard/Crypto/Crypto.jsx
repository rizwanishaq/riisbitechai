import { useState } from "react";
import { useQuery } from "react-query";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Crypto = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { isLoading, error, data } = useQuery("cryptodata", async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const responseData = await response.json();
    setSearchResults(responseData);

    return responseData;
  });

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(resultsArray);
  };
  return (
    <Card className="top-selling overflow-auto">
      <Card.Body className="pb-0">
        <Card.Title>
          Top Currency
          <Form
            className="search-form d-flex align-items-center mt-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="search coin"
                onChange={handleSearchChange}
              />
              <Button type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
        </Card.Title>

        <Table className=" table-borderless">
          <thead>
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Market Cap Rank</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.slice(0, 5).map((coin) => (
              <tr>
                <th scope="row">
                  <a href="#">
                    <img src={coin.image} alt="" />
                  </a>
                </th>
                <td>
                  <a href="#" className="text-primary fw-bold">
                    {coin.name}
                  </a>
                </td>
                <td>${coin.current_price}</td>
                <td className="fw-bold">{coin.market_cap}</td>
                <td>{coin.market_cap_rank}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Crypto;

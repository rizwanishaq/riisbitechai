import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "../../../components/KeyWordExtractor/Header";
import Footer from "../../../components/KeyWordExtractor/Footer";
import TextInput from "../../../components/KeyWordExtractor/TextInput";
import axios from "axios";
import KeywordModal from "../../../components/KeyWordExtractor/KeywordModal";

const KeywordExtractor = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const response = await axios.post(
      "http://localhost:5000/api/machinelearning//keywordextractor",
      {
        text: text,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data.keywords;
    console.log(data);

    setKeywords(data);
    setLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main id="main" className="main">
      <section>
        <Box bg="white.600" color="black" height="80vh" paddingTop={130}>
          <Container maxW="3xl" centerContent>
            <Header />
            <TextInput extractKeywords={extractKeywords} />
            <Footer />
          </Container>
          <KeywordModal
            keywords={keywords}
            loading={loading}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        </Box>
      </section>
    </main>
  );
};

export default KeywordExtractor;

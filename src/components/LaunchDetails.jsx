import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import * as API from "../services/launches";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {!launch ? (
        <div>Loading...</div>
      ) : (
        <>
          <Flex>
            <Text fontSize="2xl">
              Mision <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
              {launch.launch_success ? "Success" : "Failure"}
            </Tag>
          </Flex>
          <Box>
            Rocket: {" "}
            <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                { launch.rocket?.rocket_name}</Link>
          </Box>
          <Box>
          Wikipedia: {" "}
            <Link to={`/links/${launch.links?.wikipedia}`}>
            { launch.links?.wikipedia} </Link>
          </Box>
          <Box>
          Article link: {" "}
            <Link to={`/links/${launch.links?.article_link}`}>
            { launch.links?.article_link }</Link>
          </Box>
          <Box>
          Video link: {" "}
            <Link to={`/links/${launch.links?.video_link}`}>
            { launch.links?.video_link }</Link>
          </Box>
        </>
      )}
    </Box>
  );
}

//<div><pre>{JSON.stringify(launch)}</pre></div>

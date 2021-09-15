import { VStack, Text, Image, HStack, Badge, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Release } from "../../entities/entities";
import { updateAudioSrc, updateTheInfoOfTheReleaseThatIsBeingPlayedInsideOurPlayerRn } from "../../features/audioPlayer/audioPlayerSlice";
import { truncateString } from "../../utils/truncate";
import Userfront from "@userfront/react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { useRouter } from "next/router";

interface ReleaseProps {
  release: Release;
}

const ReleaseCard: FC<ReleaseProps> = ({ release }) => {

    const router = useRouter()
    const redirectToReleasePage = ()=>{
        router.push(`release/${release.id}`)
    }

    const accessToken = Userfront.accessToken();
  const dispatch = useAppDispatch();
  const play = (x) => {
    dispatch(updateAudioSrc(x));
    dispatch(updateTheInfoOfTheReleaseThatIsBeingPlayedInsideOurPlayerRn(release))
  };
  return (
    <VStack
      mb={5}
      mt={3}
      mx={3}
      spacing={2}
      w="220px"
      align="start"
      height="400px"
      justify="space-between"
    >
        {accessToken && <Text>acess token exists</Text>}
      <Image width="220px" src={release.cover} loading="lazy" onClick={redirectToReleasePage} />
      <Flex direction="column" justify="start" flex="1">
        <Text fontSize="0.9em">
          {release.artists
            .map((artist) => artist.title.toLowerCase())
            .join(", ")}
        </Text>
        <Text
        onClick={redirectToReleasePage}
          cursor="pointer"
          _hover={{ textDecor: "underline" }}
          fontSize="1.3em"
          fontWeight="bold"
        >
          {truncateString(release.title).toUpperCase()}
        </Text>

        <HStack mt={2} wrap="wrap">
          {release.genres.map((genre) => {
            return <Badge key={genre.title} variant="subtle">{genre.title}</Badge>;
          })}
        </HStack>
      </Flex>
      <Flex>
        <HStack spacing={1}>
          {release.tracks.map((track) => {
            return (
              <Image
              key={track.title}
                style={{ transition: "ease-in-out 0.1s" }}
                _hover={{ transform: "scale(1.2)" }}
                cursor="pointer"
                width="12px"
                height="12px"
                onClick={() => play(track.audio)}
                src="playz.svg"
              />
            );
          })}
        </HStack>
        <AddToCartButton />
      </Flex>
    </VStack>
  );
};

export default ReleaseCard;

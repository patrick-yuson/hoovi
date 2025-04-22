import {
    AspectRatio,
    Button,
    Card,
    Image,
    Text,
} from "@chakra-ui/react";

function GalleryItem({ data }) {
    return (
        <>
            <Card.Root 
                maxW="sm" 
                h={{ base: "sm", md: "lg", lg: "md" }} 
                overflow="hidden" 
                variant="elevated"
                transition="transform 0.3s ease"
                _hover={{
                    transform: "scale(1.03)",
                }}
                cursor="pointer"
            >
                <Image
                    src={data.src}
                    alt={data.alt}
                    h="100%"
                    
                />
                <Card.Body bg="var(--color-button)">
                    <Card.Title fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">{data.name}</Card.Title>
                    <Card.Description color="var(--hh-paragraph)" _dark={{ color: "var(--color-main)" }} fontSize={{ base: "xs", md: "md" }}>
                        {data.description}
                    </Card.Description>
                </Card.Body>
            </Card.Root>
        </>
    );

}

export default GalleryItem;
import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_tag_array = _test_validate(
    "array tag",
    TagArray.generate,
    TSON.createValidate<TagArray>(),
    TagArray.SPOILERS,
);

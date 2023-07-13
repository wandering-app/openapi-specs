# openapi-specs

This repository contains OpenAPI specifications of various APIs provided by US government-related services and organizations.

> **Note**:
> This repository is in it's early phase, and thus will be under construction. We cannot guarantee the permanent file paths of various OpenAPI specifications just yet. Please hold! Thank you :)

## Roadmap

The **Kind** column represents how the OpenAPI specifications are sourced. There are a few kinds:
- Mirrored: Directly sources the original OpenAPI specification files into this repository.
- Generated: The OpenAPI specification file is generated using another source.
- To generate/mirror: Not done yet, will be done through either one of the two methods.

The **Status** column is represented with emojis:
- ✅ (`U+2705 White Heavy Check Mark`): OpenAPI specifications for this organization/service are available.
- 🚧 (`U+1F6A7 Construction Sign`): OpenAPI specifications for this organization/service are currently a work-in-progress.

| Status | Organization/Service    | Website | File path | Kind |
| ------ | ----------------------- | ------- | --------- | ---- |
| ✅     | GSA Open Technology       | <https://open.gsa.gov/>             | [`./opengsa`](./opengsa) | Mirrored |
| ✅     | Lobbying Disclosure Act   | <https://lda.senate.gov/>           | [`./ldasenate`](./ldasenate/) | Mirrored |
| 🚧     | US Census Bureau          | <https://www.census.gov/>           | N/A | To generate |
| 🚧     | US Congress               | <https://api.congress.gov/>         | N/A | To generate |
| 🚧     | Massachusetts Legislature | <https://malegislature.gov/>        | N/A | To generate |
| 🚧     | New York Legislature      | <https://legislation.nysenate.gov/> | N/A | To generate |
| 🚧     | Vermont Legislature       | <https://legislature.vermont.gov/>  | N/A | To generate |

## License
This library is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or http://opensource.org/licenses/MIT).

### Contribution
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.

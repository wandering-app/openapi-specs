# openapi-specs

This repository contains OpenAPI specifications of various APIs provided by US government-related services and organizations.

> **Note**:
> This repository is in it's early phase, and thus will be under construction. We cannot guarantee the permanent file paths of various OpenAPI specifications just yet. Please hold! Thank you :)

## Roadmap

The **Kind** column represents how the OpenAPI specifications are sourced. There are a few kinds:
- Mirrored: Directly sources the original OpenAPI specification files into this repository.
- Generated: The OpenAPI specification file is generated either using another source.
- To generate/mirror: Not done yet, will be done through either one of the two methods.

| Progress       | Organization/Service    | Website | File path | Kind |
| -------------- | ----------------------- | ------- | --------- | ---- |
| ✅ Available   | GSA Open Technology     | <https://open.gsa.gov/>             | [`./opengsa`](./opengsa) | Mirrored |
| ✅ Available   | Lobbying Disclosure Act | <https://lda.senate.gov/>           | [`./ldasenate`](./ldasenate/) | Mirrored |
| 🚧 In progress | US Census Bureau        | <https://www.census.gov/>           | N/A | To generate |
| 🚧 In progress | US Congress             | <https://api.congress.gov/>         | N/A | To generate |
| 🚧 In progress | New York Legislature    | <https://legislation.nysenate.gov/> | N/A | To generate |
| 🚧 In progress | Vermont Legislature     | <https://legislature.vermont.gov/>  | N/A | To generate |



## License
This library is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or http://opensource.org/licenses/MIT).

### Contribution
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.

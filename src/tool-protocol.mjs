import { supportsMlxTools } from "./mlx-capabilities.mjs";

export function supportsClientToolSearch(providerKind, capabilities) {
  return providerKind === "lmstudio-responses" || providerKind === "omlx-responses" ||
    (providerKind === "mlx-chat-completions" && supportsMlxTools(capabilities));
}

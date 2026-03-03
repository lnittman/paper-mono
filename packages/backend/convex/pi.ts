/**
 * Pi agent runtime bridge client.
 */

import { Pi } from "@lnittman/convex-pi";
import { components } from "./_generated/api";

export const pi = new Pi(components.pi);

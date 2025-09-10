// Barrel exports for match utilities
export * from './match-helpers';
export { createBalancedDoublesMatches } from './match-level';
export { createRandomBalancedDoublesMatches } from './match-random';
export { createMixedAndSameSexDoublesMatches } from './match-mixed';

// Backward-compatibility aliases
export { createBalancedDoublesMatches as createDoublesMatches } from './match-level';
export { createMixedAndSameSexDoublesMatches as createMixedMatches } from './match-mixed';
export { createMixedAndSameSexDoublesMatches as createMixedDoublesMatches } from './match-mixed';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      abilities: {
        Row: {
          effect: string | null
          flavor_text: string | null
          generation_id: number | null
          id: number
          identifier: string | null
          is_main_series: boolean
          name: string | null
          short_effect: string | null
        }
        Insert: {
          effect?: string | null
          flavor_text?: string | null
          generation_id?: number | null
          id: number
          identifier?: string | null
          is_main_series?: boolean
          name?: string | null
          short_effect?: string | null
        }
        Update: {
          effect?: string | null
          flavor_text?: string | null
          generation_id?: number | null
          id?: number
          identifier?: string | null
          is_main_series?: boolean
          name?: string | null
          short_effect?: string | null
        }
      }
      berries: {
        Row: {
          firmness_id: number | null
          growth_time: number | null
          id: number
          item_id: number | null
          max_harvest: number | null
          natural_gift_power: number | null
          natural_gift_type_id: number | null
          size: number | null
          smoothness: number | null
          soil_dryness: number | null
        }
        Insert: {
          firmness_id?: number | null
          growth_time?: number | null
          id: number
          item_id?: number | null
          max_harvest?: number | null
          natural_gift_power?: number | null
          natural_gift_type_id?: number | null
          size?: number | null
          smoothness?: number | null
          soil_dryness?: number | null
        }
        Update: {
          firmness_id?: number | null
          growth_time?: number | null
          id?: number
          item_id?: number | null
          max_harvest?: number | null
          natural_gift_power?: number | null
          natural_gift_type_id?: number | null
          size?: number | null
          smoothness?: number | null
          soil_dryness?: number | null
        }
      }
      berry_firmness: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      berry_flavors: {
        Row: {
          berry_id: number | null
          contest_type_id: number | null
          flavor: number | null
          id: string
        }
        Insert: {
          berry_id?: number | null
          contest_type_id?: number | null
          flavor?: number | null
          id?: string
        }
        Update: {
          berry_id?: number | null
          contest_type_id?: number | null
          flavor?: number | null
          id?: string
        }
      }
      characteristics: {
        Row: {
          gene_mod_5: string | null
          id: number
          message: string | null
          stat_id: number | null
        }
        Insert: {
          gene_mod_5?: string | null
          id: number
          message?: string | null
          stat_id?: number | null
        }
        Update: {
          gene_mod_5?: string | null
          id?: number
          message?: string | null
          stat_id?: number | null
        }
      }
      conquest_episode_warriors: {
        Row: {
          episode_id: number | null
          id: string
          warrior_id: number | null
        }
        Insert: {
          episode_id?: number | null
          id?: string
          warrior_id?: number | null
        }
        Update: {
          episode_id?: number | null
          id?: string
          warrior_id?: number | null
        }
      }
      conquest_episodes: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      conquest_kingdoms: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
          type_id: number | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
          type_id?: number | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
          type_id?: number | null
        }
      }
      conquest_max_links: {
        Row: {
          id: string
          max_link: number | null
          pokemon_species_id: number | null
          warrior_rank_id: number | null
        }
        Insert: {
          id?: string
          max_link?: number | null
          pokemon_species_id?: number | null
          warrior_rank_id?: number | null
        }
        Update: {
          id?: string
          max_link?: number | null
          pokemon_species_id?: number | null
          warrior_rank_id?: number | null
        }
      }
      conquest_move_data: {
        Row: {
          accuracy: number | null
          displacement_id: number | null
          effect_chance: number | null
          effect_id: number | null
          id: string
          move_id: number | null
          power: number | null
          range_id: number | null
        }
        Insert: {
          accuracy?: number | null
          displacement_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          id?: string
          move_id?: number | null
          power?: number | null
          range_id?: number | null
        }
        Update: {
          accuracy?: number | null
          displacement_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          id?: string
          move_id?: number | null
          power?: number | null
          range_id?: number | null
        }
      }
      conquest_move_displacements: {
        Row: {
          affects_target: boolean
          effect: string | null
          id: number
          identifier: string | null
          name: string | null
          short_effect: string | null
        }
        Insert: {
          affects_target?: boolean
          effect?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
          short_effect?: string | null
        }
        Update: {
          affects_target?: boolean
          effect?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
          short_effect?: string | null
        }
      }
      conquest_move_effects: {
        Row: {
          effect: string | null
          id: number
          short_effect: string | null
        }
        Insert: {
          effect?: string | null
          id: number
          short_effect?: string | null
        }
        Update: {
          effect?: string | null
          id?: number
          short_effect?: string | null
        }
      }
      conquest_move_ranges: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
          targets: number | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
          targets?: number | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
          targets?: number | null
        }
      }
      conquest_pokemon_abilities: {
        Row: {
          ability_id: number | null
          id: string
          pokemon_species_id: number | null
          slot: number | null
        }
        Insert: {
          ability_id?: number | null
          id?: string
          pokemon_species_id?: number | null
          slot?: number | null
        }
        Update: {
          ability_id?: number | null
          id?: string
          pokemon_species_id?: number | null
          slot?: number | null
        }
      }
      conquest_pokemon_evolution: {
        Row: {
          evolved_species_id: number | null
          id: string
          item_id: string | null
          kingdom_id: string | null
          minimum_link: string | null
          minimum_stat: number | null
          recruiting_ko_required: string | null
          required_stat_id: number | null
          warrior_gender_id: string | null
        }
        Insert: {
          evolved_species_id?: number | null
          id?: string
          item_id?: string | null
          kingdom_id?: string | null
          minimum_link?: string | null
          minimum_stat?: number | null
          recruiting_ko_required?: string | null
          required_stat_id?: number | null
          warrior_gender_id?: string | null
        }
        Update: {
          evolved_species_id?: number | null
          id?: string
          item_id?: string | null
          kingdom_id?: string | null
          minimum_link?: string | null
          minimum_stat?: number | null
          recruiting_ko_required?: string | null
          required_stat_id?: number | null
          warrior_gender_id?: string | null
        }
      }
      conquest_pokemon_moves: {
        Row: {
          id: string
          move_id: number | null
          pokemon_species_id: number | null
        }
        Insert: {
          id?: string
          move_id?: number | null
          pokemon_species_id?: number | null
        }
        Update: {
          id?: string
          move_id?: number | null
          pokemon_species_id?: number | null
        }
      }
      conquest_pokemon_stats: {
        Row: {
          base_stat: number | null
          conquest_stat_id: number | null
          id: string
          pokemon_species_id: number | null
        }
        Insert: {
          base_stat?: number | null
          conquest_stat_id?: number | null
          id?: string
          pokemon_species_id?: number | null
        }
        Update: {
          base_stat?: number | null
          conquest_stat_id?: number | null
          id?: string
          pokemon_species_id?: number | null
        }
      }
      conquest_stats: {
        Row: {
          id: number
          identifier: string | null
          is_base: boolean | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          is_base?: boolean | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          is_base?: boolean | null
          name?: string | null
        }
      }
      conquest_transformation_pokemon: {
        Row: {
          id: string
          pokemon_species_id: number | null
          transformation_id: number | null
        }
        Insert: {
          id?: string
          pokemon_species_id?: number | null
          transformation_id?: number | null
        }
        Update: {
          id?: string
          pokemon_species_id?: number | null
          transformation_id?: number | null
        }
      }
      conquest_transformation_warriors: {
        Row: {
          id: string
          present_warrior_id: number | null
          transformation_id: number | null
        }
        Insert: {
          id?: string
          present_warrior_id?: number | null
          transformation_id?: number | null
        }
        Update: {
          id?: string
          present_warrior_id?: number | null
          transformation_id?: number | null
        }
      }
      conquest_warrior_archetypes: {
        Row: {
          id: number
          identifier: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
        }
      }
      conquest_warrior_rank_stat_map: {
        Row: {
          base_stat: number | null
          id: string
          warrior_rank_id: number | null
          warrior_stat_id: number | null
        }
        Insert: {
          base_stat?: number | null
          id?: string
          warrior_rank_id?: number | null
          warrior_stat_id?: number | null
        }
        Update: {
          base_stat?: number | null
          id?: string
          warrior_rank_id?: number | null
          warrior_stat_id?: number | null
        }
      }
      conquest_warrior_ranks: {
        Row: {
          id: number
          rank: number | null
          skill_id: number | null
          warrior_id: number | null
        }
        Insert: {
          id: number
          rank?: number | null
          skill_id?: number | null
          warrior_id?: number | null
        }
        Update: {
          id?: number
          rank?: number | null
          skill_id?: number | null
          warrior_id?: number | null
        }
      }
      conquest_warrior_skills: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      conquest_warrior_specialties: {
        Row: {
          id: string
          slot: number | null
          type_id: number | null
          warrior_id: number | null
        }
        Insert: {
          id?: string
          slot?: number | null
          type_id?: number | null
          warrior_id?: number | null
        }
        Update: {
          id?: string
          slot?: number | null
          type_id?: number | null
          warrior_id?: number | null
        }
      }
      conquest_warrior_stats: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      conquest_warrior_transformation: {
        Row: {
          collection_type_id: string | null
          completed_episode_id: number | null
          current_episode_id: number | null
          distant_warrior_id: string | null
          female_warlord_count: number | null
          id: string
          is_automatic: number | null
          pokemon_count: number | null
          required_link: number | null
          transformed_warrior_rank_id: number | null
          warrior_count: number | null
        }
        Insert: {
          collection_type_id?: string | null
          completed_episode_id?: number | null
          current_episode_id?: number | null
          distant_warrior_id?: string | null
          female_warlord_count?: number | null
          id?: string
          is_automatic?: number | null
          pokemon_count?: number | null
          required_link?: number | null
          transformed_warrior_rank_id?: number | null
          warrior_count?: number | null
        }
        Update: {
          collection_type_id?: string | null
          completed_episode_id?: number | null
          current_episode_id?: number | null
          distant_warrior_id?: string | null
          female_warlord_count?: number | null
          id?: string
          is_automatic?: number | null
          pokemon_count?: number | null
          required_link?: number | null
          transformed_warrior_rank_id?: number | null
          warrior_count?: number | null
        }
      }
      conquest_warriors: {
        Row: {
          archetype_id: string | null
          gender_id: number | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          archetype_id?: string | null
          gender_id?: number | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          archetype_id?: string | null
          gender_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      contest_combos: {
        Row: {
          first_move_id: number | null
          id: string
          second_move_id: number | null
        }
        Insert: {
          first_move_id?: number | null
          id?: string
          second_move_id?: number | null
        }
        Update: {
          first_move_id?: number | null
          id?: string
          second_move_id?: number | null
        }
      }
      contest_effects: {
        Row: {
          appeal: number | null
          effect: string | null
          flavor_text: string | null
          id: number
          jam: string | null
        }
        Insert: {
          appeal?: number | null
          effect?: string | null
          flavor_text?: string | null
          id: number
          jam?: string | null
        }
        Update: {
          appeal?: number | null
          effect?: string | null
          flavor_text?: string | null
          id?: number
          jam?: string | null
        }
      }
      contest_types: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      egg_groups: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      encounter_condition_value_map: {
        Row: {
          encounter_condition_value_id: number | null
          encounter_id: number | null
          id: string
        }
        Insert: {
          encounter_condition_value_id?: number | null
          encounter_id?: number | null
          id?: string
        }
        Update: {
          encounter_condition_value_id?: number | null
          encounter_id?: number | null
          id?: string
        }
      }
      encounter_condition_values: {
        Row: {
          encounter_condition_id: number | null
          id: number
          identifier: string | null
          is_default: boolean
          name: string | null
        }
        Insert: {
          encounter_condition_id?: number | null
          id?: number
          identifier?: string | null
          is_default?: boolean
          name?: string | null
        }
        Update: {
          encounter_condition_id?: number | null
          id?: number
          identifier?: string | null
          is_default?: boolean
          name?: string | null
        }
      }
      encounter_conditions: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      encounter_methods: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
          order: number | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
          order?: number | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
          order?: number | null
        }
      }
      encounter_slots: {
        Row: {
          encounter_method_id: number | null
          id: number
          rarity: number | null
          slot: number | null
          version_group_id: number | null
        }
        Insert: {
          encounter_method_id?: number | null
          id: number
          rarity?: number | null
          slot?: number | null
          version_group_id?: number | null
        }
        Update: {
          encounter_method_id?: number | null
          id?: number
          rarity?: number | null
          slot?: number | null
          version_group_id?: number | null
        }
      }
      encounters: {
        Row: {
          encounter_slot_id: number | null
          id: number
          location_area_id: number | null
          max_level: number | null
          min_level: number | null
          pokemon_id: number | null
          version_id: number | null
        }
        Insert: {
          encounter_slot_id?: number | null
          id: number
          location_area_id?: number | null
          max_level?: number | null
          min_level?: number | null
          pokemon_id?: number | null
          version_id?: number | null
        }
        Update: {
          encounter_slot_id?: number | null
          id?: number
          location_area_id?: number | null
          max_level?: number | null
          min_level?: number | null
          pokemon_id?: number | null
          version_id?: number | null
        }
      }
      evolution_chains: {
        Row: {
          baby_trigger_item_id: string | null
          id: number
        }
        Insert: {
          baby_trigger_item_id?: string | null
          id: number
        }
        Update: {
          baby_trigger_item_id?: string | null
          id?: number
        }
      }
      evolution_triggers: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      experience: {
        Row: {
          experience: number | null
          growth_rate_id: number | null
          id: string
          level: number | null
        }
        Insert: {
          experience?: number | null
          growth_rate_id?: number | null
          id?: string
          level?: number | null
        }
        Update: {
          experience?: number | null
          growth_rate_id?: number | null
          id?: string
          level?: number | null
        }
      }
      genders: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      generations: {
        Row: {
          id: number
          identifier: string | null
          main_region_id: number | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          main_region_id?: number | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          main_region_id?: number | null
          name?: string | null
        }
      }
      growth_rates: {
        Row: {
          formula: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          formula?: string | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          formula?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      item_categories: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
          pocket_id: number | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
          pocket_id?: number | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
          pocket_id?: number | null
        }
      }
      item_flag_map: {
        Row: {
          id: string
          item_flag_id: number | null
          item_id: number | null
        }
        Insert: {
          id?: string
          item_flag_id?: number | null
          item_id?: number | null
        }
        Update: {
          id?: string
          item_flag_id?: number | null
          item_id?: number | null
        }
      }
      item_flags: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      item_flavor_text: {
        Row: {
          flavor_text: string | null
          id: string
          item_id: number | null
          version_group_id: number | null
        }
        Insert: {
          flavor_text?: string | null
          id?: string
          item_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          flavor_text?: string | null
          id?: string
          item_id?: number | null
          version_group_id?: number | null
        }
      }
      item_fling_effects: {
        Row: {
          effect: string | null
          id: number
          identifier: string | null
        }
        Insert: {
          effect?: string | null
          id: number
          identifier?: string | null
        }
        Update: {
          effect?: string | null
          id?: number
          identifier?: string | null
        }
      }
      item_game_indices: {
        Row: {
          game_index: number | null
          generation_id: number | null
          id: string
          item_id: number | null
        }
        Insert: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          item_id?: number | null
        }
        Update: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          item_id?: number | null
        }
      }
      item_pockets: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      items: {
        Row: {
          category_id: number | null
          cost: number | null
          effect: string | null
          fling_effect_id: string | null
          fling_power: number | null
          id: number
          identifier: string | null
          name: string | null
          short_effect: string | null
        }
        Insert: {
          category_id?: number | null
          cost?: number | null
          effect?: string | null
          fling_effect_id?: string | null
          fling_power?: number | null
          id: number
          identifier?: string | null
          name?: string | null
          short_effect?: string | null
        }
        Update: {
          category_id?: number | null
          cost?: number | null
          effect?: string | null
          fling_effect_id?: string | null
          fling_power?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          short_effect?: string | null
        }
      }
      location_area_encounter_rates: {
        Row: {
          encounter_method_id: number | null
          id: string
          location_area_id: number | null
          rate: number | null
          version_id: number | null
        }
        Insert: {
          encounter_method_id?: number | null
          id?: string
          location_area_id?: number | null
          rate?: number | null
          version_id?: number | null
        }
        Update: {
          encounter_method_id?: number | null
          id?: string
          location_area_id?: number | null
          rate?: number | null
          version_id?: number | null
        }
      }
      location_areas: {
        Row: {
          game_index: number | null
          id: number
          identifier: string | null
          location_id: number | null
          name: string | null
        }
        Insert: {
          game_index?: number | null
          id: number
          identifier?: string | null
          location_id?: number | null
          name?: string | null
        }
        Update: {
          game_index?: number | null
          id?: number
          identifier?: string | null
          location_id?: number | null
          name?: string | null
        }
      }
      location_game_indices: {
        Row: {
          game_index: number | null
          generation_id: number | null
          id: string
          location_id: number | null
        }
        Insert: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          location_id?: number | null
        }
        Update: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          location_id?: number | null
        }
      }
      locations: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
          region_id: number | null
          subtitle: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
          region_id?: number | null
          subtitle?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
          region_id?: number | null
          subtitle?: string | null
        }
      }
      machines: {
        Row: {
          id: string
          item_id: number | null
          machine_number: number | null
          move_id: number | null
          version_group_id: number | null
        }
        Insert: {
          id?: string
          item_id?: number | null
          machine_number?: number | null
          move_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          id?: string
          item_id?: number | null
          machine_number?: number | null
          move_id?: number | null
          version_group_id?: number | null
        }
      }
      move_battle_styles: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      move_changelog: {
        Row: {
          accuracy: number | null
          changed_in_version_group_id: number | null
          effect_chance: number | null
          effect_id: number | null
          move_id: number | null
          power: number | null
          pp: number | null
          priority: number | null
          target_id: number | null
          type_id: number | null
        }
        Insert: {
          accuracy?: number | null
          changed_in_version_group_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          move_id?: number | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          type_id?: number | null
        }
        Update: {
          accuracy?: number | null
          changed_in_version_group_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          move_id?: number | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          type_id?: number | null
        }
      }
      move_damage_classes: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      move_effect_changelog: {
        Row: {
          changed_in_version_group_id: number | null
          effect: string | null
          effect_id: number | null
          id: number
        }
        Insert: {
          changed_in_version_group_id?: number | null
          effect?: string | null
          effect_id?: number | null
          id: number
        }
        Update: {
          changed_in_version_group_id?: number | null
          effect?: string | null
          effect_id?: number | null
          id?: number
        }
      }
      move_effects: {
        Row: {
          effect: string | null
          id: number
          short_effect: string | null
        }
        Insert: {
          effect?: string | null
          id?: number
          short_effect?: string | null
        }
        Update: {
          effect?: string | null
          id?: number
          short_effect?: string | null
        }
      }
      move_flag_map: {
        Row: {
          id: string
          move_flag_id: number | null
          move_id: number | null
        }
        Insert: {
          id?: string
          move_flag_id?: number | null
          move_id?: number | null
        }
        Update: {
          id?: string
          move_flag_id?: number | null
          move_id?: number | null
        }
      }
      move_flags: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      move_meta: {
        Row: {
          ailment_chance: string | null
          crit_rate: string | null
          drain: string | null
          flinch_chance: string | null
          healing: string | null
          max_hits: string | null
          max_turns: string | null
          meta_ailment_id: string | null
          meta_category_id: string | null
          min_hits: string | null
          min_turns: string | null
          move_id: number
          stat_chance: string | null
        }
        Insert: {
          ailment_chance?: string | null
          crit_rate?: string | null
          drain?: string | null
          flinch_chance?: string | null
          healing?: string | null
          max_hits?: string | null
          max_turns?: string | null
          meta_ailment_id?: string | null
          meta_category_id?: string | null
          min_hits?: string | null
          min_turns?: string | null
          move_id: number
          stat_chance?: string | null
        }
        Update: {
          ailment_chance?: string | null
          crit_rate?: string | null
          drain?: string | null
          flinch_chance?: string | null
          healing?: string | null
          max_hits?: string | null
          max_turns?: string | null
          meta_ailment_id?: string | null
          meta_category_id?: string | null
          min_hits?: string | null
          min_turns?: string | null
          move_id?: number
          stat_chance?: string | null
        }
      }
      move_meta_ailments: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      move_meta_categories: {
        Row: {
          description: string | null
          id: string
          identifier: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id: string
          identifier?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          identifier?: string | null
          name?: string | null
        }
      }
      move_meta_stat_changes: {
        Row: {
          change: number | null
          id: string
          move_id: number | null
          stat_id: number | null
        }
        Insert: {
          change?: number | null
          id?: string
          move_id?: number | null
          stat_id?: number | null
        }
        Update: {
          change?: number | null
          id?: string
          move_id?: number | null
          stat_id?: number | null
        }
      }
      move_targets: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      moves: {
        Row: {
          accuracy: number | null
          contest_effect_id: number | null
          contest_type_id: number | null
          damage_class_id: number | null
          effect_chance: string | null
          effect_id: number | null
          generation_id: number | null
          id: number
          identifier: string | null
          name: string | null
          power: number | null
          pp: number | null
          priority: string | null
          super_contest_effect_id: number | null
          target_id: number | null
          type_id: number | null
        }
        Insert: {
          accuracy?: number | null
          contest_effect_id?: number | null
          contest_type_id?: number | null
          damage_class_id?: number | null
          effect_chance?: string | null
          effect_id?: number | null
          generation_id?: number | null
          id: number
          identifier?: string | null
          name?: string | null
          power?: number | null
          pp?: number | null
          priority?: string | null
          super_contest_effect_id?: number | null
          target_id?: number | null
          type_id?: number | null
        }
        Update: {
          accuracy?: number | null
          contest_effect_id?: number | null
          contest_type_id?: number | null
          damage_class_id?: number | null
          effect_chance?: string | null
          effect_id?: number | null
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          power?: number | null
          pp?: number | null
          priority?: string | null
          super_contest_effect_id?: number | null
          target_id?: number | null
          type_id?: number | null
        }
      }
      moves_prose: {
        Row: {
          flavor_text: string | null
          id: string
          move_id: number | null
          version_group_id: number | null
        }
        Insert: {
          flavor_text?: string | null
          id?: string
          move_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          flavor_text?: string | null
          id?: string
          move_id?: number | null
          version_group_id?: number | null
        }
      }
      nature_battle_style_preferences: {
        Row: {
          high_hp_preference: number | null
          id: string
          low_hp_preference: number | null
          move_battle_style_id: number | null
          nature_id: number | null
        }
        Insert: {
          high_hp_preference?: number | null
          id?: string
          low_hp_preference?: number | null
          move_battle_style_id?: number | null
          nature_id?: number | null
        }
        Update: {
          high_hp_preference?: number | null
          id?: string
          low_hp_preference?: number | null
          move_battle_style_id?: number | null
          nature_id?: number | null
        }
      }
      nature_pokeathlon_stats: {
        Row: {
          id: string
          max_change: number | null
          nature_id: number | null
          pokeathlon_stat_id: number | null
        }
        Insert: {
          id?: string
          max_change?: number | null
          nature_id?: number | null
          pokeathlon_stat_id?: number | null
        }
        Update: {
          id?: string
          max_change?: number | null
          nature_id?: number | null
          pokeathlon_stat_id?: number | null
        }
      }
      natures: {
        Row: {
          decreased_stat_id: number | null
          game_index: string | null
          hates_flavor_id: number | null
          id: number
          identifier: string | null
          increased_stat_id: number | null
          likes_flavor_id: number | null
          name: string | null
        }
        Insert: {
          decreased_stat_id?: number | null
          game_index?: string | null
          hates_flavor_id?: number | null
          id?: number
          identifier?: string | null
          increased_stat_id?: number | null
          likes_flavor_id?: number | null
          name?: string | null
        }
        Update: {
          decreased_stat_id?: number | null
          game_index?: string | null
          hates_flavor_id?: number | null
          id?: number
          identifier?: string | null
          increased_stat_id?: number | null
          likes_flavor_id?: number | null
          name?: string | null
        }
      }
      pal_park: {
        Row: {
          area_id: number | null
          base_score: number | null
          id: string
          rate: number | null
          species_id: number | null
        }
        Insert: {
          area_id?: number | null
          base_score?: number | null
          id?: string
          rate?: number | null
          species_id?: number | null
        }
        Update: {
          area_id?: number | null
          base_score?: number | null
          id?: string
          rate?: number | null
          species_id?: number | null
        }
      }
      pal_park_areas: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      pokeathlon_stats: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      pokedex_version_groups: {
        Row: {
          id: string
          pokedex_id: number | null
          version_group_id: number | null
        }
        Insert: {
          id?: string
          pokedex_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          id?: string
          pokedex_id?: number | null
          version_group_id?: number | null
        }
      }
      pokedexes: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          is_main_series: boolean | null
          name: string | null
          region_id: number | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          is_main_series?: boolean | null
          name?: string | null
          region_id?: number | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          is_main_series?: boolean | null
          name?: string | null
          region_id?: number | null
        }
      }
      pokemon: {
        Row: {
          base_experience: number | null
          height: number | null
          id: number
          identifier: string | null
          is_default: boolean
          order: number | null
          species_id: number | null
          weight: number | null
        }
        Insert: {
          base_experience?: number | null
          height?: number | null
          id: number
          identifier?: string | null
          is_default?: boolean
          order?: number | null
          species_id?: number | null
          weight?: number | null
        }
        Update: {
          base_experience?: number | null
          height?: number | null
          id?: number
          identifier?: string | null
          is_default?: boolean
          order?: number | null
          species_id?: number | null
          weight?: number | null
        }
      }
      pokemon_abilities: {
        Row: {
          ability_id: number | null
          id: string
          is_hidden: string | null
          pokemon_id: number | null
          slot: number | null
        }
        Insert: {
          ability_id?: number | null
          id?: string
          is_hidden?: string | null
          pokemon_id?: number | null
          slot?: number | null
        }
        Update: {
          ability_id?: number | null
          id?: string
          is_hidden?: string | null
          pokemon_id?: number | null
          slot?: number | null
        }
      }
      pokemon_colors: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      pokemon_dex_numbers: {
        Row: {
          id: string
          pokedex_id: number | null
          pokedex_number: number | null
          species_id: number | null
        }
        Insert: {
          id?: string
          pokedex_id?: number | null
          pokedex_number?: number | null
          species_id?: number | null
        }
        Update: {
          id?: string
          pokedex_id?: number | null
          pokedex_number?: number | null
          species_id?: number | null
        }
      }
      pokemon_egg_groups: {
        Row: {
          egg_group_id: number | null
          id: string
          species_id: number | null
        }
        Insert: {
          egg_group_id?: number | null
          id?: string
          species_id?: number | null
        }
        Update: {
          egg_group_id?: number | null
          id?: string
          species_id?: number | null
        }
      }
      pokemon_evolutions: {
        Row: {
          evolution_trigger_id: number | null
          evolved_species_id: number | null
          gender_id: number | null
          held_item_id: number | null
          id: number
          known_move_id: number | null
          known_move_type_id: number | null
          location_id: string | null
          minimum_affection: string | null
          minimum_beauty: string | null
          minimum_happiness: string | null
          minimum_level: number | null
          needs_overworld_rain: string | null
          party_species_id: string | null
          party_type_id: string | null
          relative_physical_stats: string | null
          time_of_day: string | null
          trade_species_id: string | null
          trigger_item_id: number | null
          turn_upside_down: string | null
        }
        Insert: {
          evolution_trigger_id?: number | null
          evolved_species_id?: number | null
          gender_id?: number | null
          held_item_id?: number | null
          id: number
          known_move_id?: number | null
          known_move_type_id?: number | null
          location_id?: string | null
          minimum_affection?: string | null
          minimum_beauty?: string | null
          minimum_happiness?: string | null
          minimum_level?: number | null
          needs_overworld_rain?: string | null
          party_species_id?: string | null
          party_type_id?: string | null
          relative_physical_stats?: string | null
          time_of_day?: string | null
          trade_species_id?: string | null
          trigger_item_id?: number | null
          turn_upside_down?: string | null
        }
        Update: {
          evolution_trigger_id?: number | null
          evolved_species_id?: number | null
          gender_id?: number | null
          held_item_id?: number | null
          id?: number
          known_move_id?: number | null
          known_move_type_id?: number | null
          location_id?: string | null
          minimum_affection?: string | null
          minimum_beauty?: string | null
          minimum_happiness?: string | null
          minimum_level?: number | null
          needs_overworld_rain?: string | null
          party_species_id?: string | null
          party_type_id?: string | null
          relative_physical_stats?: string | null
          time_of_day?: string | null
          trade_species_id?: string | null
          trigger_item_id?: number | null
          turn_upside_down?: string | null
        }
      }
      pokemon_form_generations: {
        Row: {
          game_index: string | null
          generation_id: number | null
          id: string
          pokemon_form_id: number | null
        }
        Insert: {
          game_index?: string | null
          generation_id?: number | null
          id?: string
          pokemon_form_id?: number | null
        }
        Update: {
          game_index?: string | null
          generation_id?: number | null
          id?: string
          pokemon_form_id?: number | null
        }
      }
      pokemon_form_pokeathlon_stats: {
        Row: {
          base_stat: number | null
          id: string
          maximum_stat: number | null
          minimum_stat: number | null
          pokeathlon_stat_id: number | null
          pokemon_form_id: number | null
        }
        Insert: {
          base_stat?: number | null
          id?: string
          maximum_stat?: number | null
          minimum_stat?: number | null
          pokeathlon_stat_id?: number | null
          pokemon_form_id?: number | null
        }
        Update: {
          base_stat?: number | null
          id?: string
          maximum_stat?: number | null
          minimum_stat?: number | null
          pokeathlon_stat_id?: number | null
          pokemon_form_id?: number | null
        }
      }
      pokemon_form_types: {
        Row: {
          pokemon_form_id: number | null
          slot: number | null
          type_id: number | null
        }
        Insert: {
          pokemon_form_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
        Update: {
          pokemon_form_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
      }
      pokemon_forms: {
        Row: {
          form_identifier: string | null
          form_name: string | null
          form_order: number | null
          id: number
          identifier: string | null
          introduced_in_version_group_id: number | null
          is_battle_only: string | null
          is_default: number | null
          is_mega: string | null
          order: number | null
          pokemon_id: number | null
          pokemon_name: string | null
        }
        Insert: {
          form_identifier?: string | null
          form_name?: string | null
          form_order?: number | null
          id: number
          identifier?: string | null
          introduced_in_version_group_id?: number | null
          is_battle_only?: string | null
          is_default?: number | null
          is_mega?: string | null
          order?: number | null
          pokemon_id?: number | null
          pokemon_name?: string | null
        }
        Update: {
          form_identifier?: string | null
          form_name?: string | null
          form_order?: number | null
          id?: number
          identifier?: string | null
          introduced_in_version_group_id?: number | null
          is_battle_only?: string | null
          is_default?: number | null
          is_mega?: string | null
          order?: number | null
          pokemon_id?: number | null
          pokemon_name?: string | null
        }
      }
      pokemon_game_indices: {
        Row: {
          game_index: number | null
          id: string
          pokemon_id: number | null
          version_id: number | null
        }
        Insert: {
          game_index?: number | null
          id?: string
          pokemon_id?: number | null
          version_id?: number | null
        }
        Update: {
          game_index?: number | null
          id?: string
          pokemon_id?: number | null
          version_id?: number | null
        }
      }
      pokemon_habitats: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      pokemon_items: {
        Row: {
          id: string
          item_id: number | null
          pokemon_id: number | null
          rarity: number | null
          version_id: number | null
        }
        Insert: {
          id?: string
          item_id?: number | null
          pokemon_id?: number | null
          rarity?: number | null
          version_id?: number | null
        }
        Update: {
          id?: string
          item_id?: number | null
          pokemon_id?: number | null
          rarity?: number | null
          version_id?: number | null
        }
      }
      pokemon_move_methods: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      pokemon_moves: {
        Row: {
          id: string
          level: number | null
          move_id: number | null
          order: number | null
          pokemon_id: number | null
          pokemon_move_method_id: number | null
          version_group_id: number | null
        }
        Insert: {
          id?: string
          level?: number | null
          move_id?: number | null
          order?: number | null
          pokemon_id?: number | null
          pokemon_move_method_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          id?: string
          level?: number | null
          move_id?: number | null
          order?: number | null
          pokemon_id?: number | null
          pokemon_move_method_id?: number | null
          version_group_id?: number | null
        }
      }
      pokemon_shapes: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      pokemon_species: {
        Row: {
          base_happiness: number | null
          capture_rate: number | null
          color_id: number | null
          evolution_chain_id: number | null
          evolves_from_species_id: number | null
          form_description: string | null
          forms_switchable: string | null
          gender_rate: number | null
          generation_id: number | null
          genus: string | null
          growth_rate_id: number | null
          habitat_id: number | null
          has_gender_differences: string | null
          hatch_counter: number | null
          id: number
          identifier: string | null
          is_baby: string | null
          is_legendary: string | null
          is_mythical: string | null
          name: string | null
          order: number | null
          shape_id: number | null
        }
        Insert: {
          base_happiness?: number | null
          capture_rate?: number | null
          color_id?: number | null
          evolution_chain_id?: number | null
          evolves_from_species_id?: number | null
          form_description?: string | null
          forms_switchable?: string | null
          gender_rate?: number | null
          generation_id?: number | null
          genus?: string | null
          growth_rate_id?: number | null
          habitat_id?: number | null
          has_gender_differences?: string | null
          hatch_counter?: number | null
          id: number
          identifier?: string | null
          is_baby?: string | null
          is_legendary?: string | null
          is_mythical?: string | null
          name?: string | null
          order?: number | null
          shape_id?: number | null
        }
        Update: {
          base_happiness?: number | null
          capture_rate?: number | null
          color_id?: number | null
          evolution_chain_id?: number | null
          evolves_from_species_id?: number | null
          form_description?: string | null
          forms_switchable?: string | null
          gender_rate?: number | null
          generation_id?: number | null
          genus?: string | null
          growth_rate_id?: number | null
          habitat_id?: number | null
          has_gender_differences?: string | null
          hatch_counter?: number | null
          id?: number
          identifier?: string | null
          is_baby?: string | null
          is_legendary?: string | null
          is_mythical?: string | null
          name?: string | null
          order?: number | null
          shape_id?: number | null
        }
      }
      pokemon_species_flavor_text: {
        Row: {
          flavor_text: string | null
          id: string
          species_id: number | null
          version_id: number | null
        }
        Insert: {
          flavor_text?: string | null
          id?: string
          species_id?: number | null
          version_id?: number | null
        }
        Update: {
          flavor_text?: string | null
          id?: string
          species_id?: number | null
          version_id?: number | null
        }
      }
      pokemon_stats: {
        Row: {
          base_stat: number | null
          effort: number | null
          id: string
          pokemon_id: number | null
          stat_id: number | null
        }
        Insert: {
          base_stat?: number | null
          effort?: number | null
          id?: string
          pokemon_id?: number | null
          stat_id?: number | null
        }
        Update: {
          base_stat?: number | null
          effort?: number | null
          id?: string
          pokemon_id?: number | null
          stat_id?: number | null
        }
      }
      pokemon_types: {
        Row: {
          id: string
          pokemon_id: number | null
          slot: number | null
          type_id: number | null
        }
        Insert: {
          id?: string
          pokemon_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
        Update: {
          id?: string
          pokemon_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
      }
      pokemon_types_past: {
        Row: {
          generation_id: number | null
          id: string
          pokemon_id: number | null
          slot: number | null
          type_id: number | null
        }
        Insert: {
          generation_id?: number | null
          id?: string
          pokemon_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
        Update: {
          generation_id?: number | null
          id?: string
          pokemon_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
      }
      regions: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      stats: {
        Row: {
          damage_class_id: number | null
          game_index: number | null
          id: number
          identifier: string | null
          is_battle_only: string | null
          name: string | null
        }
        Insert: {
          damage_class_id?: number | null
          game_index?: number | null
          id: number
          identifier?: string | null
          is_battle_only?: string | null
          name?: string | null
        }
        Update: {
          damage_class_id?: number | null
          game_index?: number | null
          id?: number
          identifier?: string | null
          is_battle_only?: string | null
          name?: string | null
        }
      }
      super_contest_combos: {
        Row: {
          first_move_id: number | null
          id: string
          second_move_id: number | null
        }
        Insert: {
          first_move_id?: number | null
          id?: string
          second_move_id?: number | null
        }
        Update: {
          first_move_id?: number | null
          id?: string
          second_move_id?: number | null
        }
      }
      super_contest_effects: {
        Row: {
          appeal: number | null
          flavor_text: string | null
          id: number
        }
        Insert: {
          appeal?: number | null
          flavor_text?: string | null
          id: number
        }
        Update: {
          appeal?: number | null
          flavor_text?: string | null
          id?: number
        }
      }
      type_efficacy: {
        Row: {
          damage_factor: number | null
          damage_type_id: number | null
          id: string
          target_type_id: number | null
        }
        Insert: {
          damage_factor?: number | null
          damage_type_id?: number | null
          id?: string
          target_type_id?: number | null
        }
        Update: {
          damage_factor?: number | null
          damage_type_id?: number | null
          id?: string
          target_type_id?: number | null
        }
      }
      type_efficacy_past: {
        Row: {
          damage_factor: number | null
          damage_type_id: number | null
          generation_id: number | null
          id: string
          target_type_id: number | null
        }
        Insert: {
          damage_factor?: number | null
          damage_type_id?: number | null
          generation_id?: number | null
          id?: string
          target_type_id?: number | null
        }
        Update: {
          damage_factor?: number | null
          damage_type_id?: number | null
          generation_id?: number | null
          id?: string
          target_type_id?: number | null
        }
      }
      type_game_indices: {
        Row: {
          game_index: number | null
          generation_id: number | null
          id: string
          type_id: number | null
        }
        Insert: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          type_id?: number | null
        }
        Update: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          type_id?: number | null
        }
      }
      types: {
        Row: {
          damage_class_id: number | null
          generation_id: number | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          damage_class_id?: number | null
          generation_id?: number | null
          id: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          damage_class_id?: number | null
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
      }
      version_group_pokemon_move_methods: {
        Row: {
          id: string
          pokemon_move_method_id: number | null
          version_group_id: number | null
        }
        Insert: {
          id?: string
          pokemon_move_method_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          id?: string
          pokemon_move_method_id?: number | null
          version_group_id?: number | null
        }
      }
      version_groups: {
        Row: {
          generation_id: number | null
          id: number
          identifier: string | null
          name: string | null
          order: number | null
          region_id: number | null
        }
        Insert: {
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          order?: number | null
          region_id?: number | null
        }
        Update: {
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          order?: number | null
          region_id?: number | null
        }
      }
      versions: {
        Row: {
          id: number
          identifier: string | null
          name: string | null
          version_group_id: number | null
        }
        Insert: {
          id: number
          identifier?: string | null
          name?: string | null
          version_group_id?: number | null
        }
        Update: {
          id?: number
          identifier?: string | null
          name?: string | null
          version_group_id?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

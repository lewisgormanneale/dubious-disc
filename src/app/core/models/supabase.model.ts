export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      abilities: {
        Row: {
          effect: string | null
          generation_id: number | null
          id: number
          identifier: string | null
          name: string | null
          short_effect: string | null
        }
        Insert: {
          effect?: string | null
          generation_id?: number | null
          id: number
          identifier?: string | null
          name?: string | null
          short_effect?: string | null
        }
        Update: {
          effect?: string | null
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          short_effect?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "abilities_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          }
        ]
      }
      ability_changelog: {
        Row: {
          ability_id: number | null
          changed_in_version_group_id: number | null
          effect: string | null
          id: number
        }
        Insert: {
          ability_id?: number | null
          changed_in_version_group_id?: number | null
          effect?: string | null
          id: number
        }
        Update: {
          ability_id?: number | null
          changed_in_version_group_id?: number | null
          effect?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "ability_changelog_ability_id_fkey"
            columns: ["ability_id"]
            isOneToOne: false
            referencedRelation: "abilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ability_changelog_changed_in_version_group_id_fkey"
            columns: ["changed_in_version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      ability_flavor_text: {
        Row: {
          ability_id: number | null
          flavor_text: string | null
          id: string
          version_group_id: number | null
        }
        Insert: {
          ability_id?: number | null
          flavor_text?: string | null
          id?: string
          version_group_id?: number | null
        }
        Update: {
          ability_id?: number | null
          flavor_text?: string | null
          id?: string
          version_group_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ability_flavor_text_ability_id_fkey"
            columns: ["ability_id"]
            isOneToOne: false
            referencedRelation: "abilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ability_flavor_text_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "berries_firmness_id_fkey"
            columns: ["firmness_id"]
            isOneToOne: false
            referencedRelation: "berry_firmness"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "berries_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "berries_natural_gift_type_id_fkey"
            columns: ["natural_gift_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
      }
      berry_firmness: {
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "berry_flavors_berry_id_fkey"
            columns: ["berry_id"]
            isOneToOne: false
            referencedRelation: "berries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "berry_flavors_contest_type_id_fkey"
            columns: ["contest_type_id"]
            isOneToOne: false
            referencedRelation: "contest_types"
            referencedColumns: ["id"]
          }
        ]
      }
      characteristics: {
        Row: {
          gene_modulo: string | null
          id: number
          message: string | null
          stat_id: number | null
        }
        Insert: {
          gene_modulo?: string | null
          id: number
          message?: string | null
          stat_id?: number | null
        }
        Update: {
          gene_modulo?: string | null
          id?: number
          message?: string | null
          stat_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "characteristics_stat_id_fkey"
            columns: ["stat_id"]
            isOneToOne: false
            referencedRelation: "stats"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "contest_combos_first_move_id_fkey"
            columns: ["first_move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contest_combos_second_move_id_fkey"
            columns: ["second_move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          }
        ]
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
          id?: number
          jam?: string | null
        }
        Update: {
          appeal?: number | null
          effect?: string | null
          flavor_text?: string | null
          id?: number
          jam?: string | null
        }
        Relationships: []
      }
      contest_types: {
        Row: {
          color: string | null
          flavor: string | null
          id: number
          identifier: string | null
          name: string | null
        }
        Insert: {
          color?: string | null
          flavor?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
        Update: {
          color?: string | null
          flavor?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
        }
        Relationships: []
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "encounter_condition_value_map_encounter_condition_value_id_fkey"
            columns: ["encounter_condition_value_id"]
            isOneToOne: false
            referencedRelation: "encounter_condition_values"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "encounter_condition_value_map_encounter_id_fkey"
            columns: ["encounter_id"]
            isOneToOne: false
            referencedRelation: "encounters"
            referencedColumns: ["id"]
          }
        ]
      }
      encounter_condition_values: {
        Row: {
          encounter_condition_id: number | null
          id: number
          identifier: string | null
          is_default: boolean | null
          name: string | null
        }
        Insert: {
          encounter_condition_id?: number | null
          id: number
          identifier?: string | null
          is_default?: boolean | null
          name?: string | null
        }
        Update: {
          encounter_condition_id?: number | null
          id?: number
          identifier?: string | null
          is_default?: boolean | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "encounter_condition_values_encounter_condition_id_fkey"
            columns: ["encounter_condition_id"]
            isOneToOne: false
            referencedRelation: "encounter_conditions"
            referencedColumns: ["id"]
          }
        ]
      }
      encounter_conditions: {
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
        Relationships: []
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "encounter_slots_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "encounters_encounter_slot_id_fkey"
            columns: ["encounter_slot_id"]
            isOneToOne: false
            referencedRelation: "encounter_slots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "encounters_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "encounters_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "versions"
            referencedColumns: ["id"]
          }
        ]
      }
      evolution_chains: {
        Row: {
          baby_trigger_item_id: number | null
          id: number
        }
        Insert: {
          baby_trigger_item_id?: number | null
          id: number
        }
        Update: {
          baby_trigger_item_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "evolution_chains_baby_trigger_item_id_fkey"
            columns: ["baby_trigger_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          }
        ]
      }
      evolution_triggers: {
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "experience_growth_rate_id_fkey"
            columns: ["growth_rate_id"]
            isOneToOne: false
            referencedRelation: "growth_rates"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "generations_main_region_id_fkey"
            columns: ["main_region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "item_categories_pocket_id_fkey"
            columns: ["pocket_id"]
            isOneToOne: false
            referencedRelation: "item_pockets"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "item_flag_map_item_flag_id_fkey"
            columns: ["item_flag_id"]
            isOneToOne: false
            referencedRelation: "item_flags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_flag_map_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
      }
      item_flavor_text: {
        Row: {
          flavor_text: string | null
          item_id: number | null
          version_group_id: number | null
        }
        Insert: {
          flavor_text?: string | null
          item_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          flavor_text?: string | null
          item_id?: number | null
          version_group_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "item_flavor_text_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_flavor_text_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "item_game_indices_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_game_indices_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          }
        ]
      }
      item_names: {
        Row: {
          item_id: number | null
          local_language_id: number | null
          name: string | null
        }
        Insert: {
          item_id?: number | null
          local_language_id?: number | null
          name?: string | null
        }
        Update: {
          item_id?: number | null
          local_language_id?: number | null
          name?: string | null
        }
        Relationships: []
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
        Relationships: []
      }
      items: {
        Row: {
          category_id: number | null
          cost: number | null
          effect: string | null
          fling_effect_id: number | null
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
          fling_effect_id?: number | null
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
          fling_effect_id?: number | null
          fling_power?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          short_effect?: string | null
        }
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "location_area_encounter_rates_location_area_id_fkey"
            columns: ["location_area_id"]
            isOneToOne: false
            referencedRelation: "location_areas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_area_encounter_rates_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "versions"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "location_areas_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "location_game_indices_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_game_indices_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "locations_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "machines_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machines_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "machines_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
      }
      move_changelog: {
        Row: {
          accuracy: string | null
          changed_in_version_group_id: number | null
          effect_chance: string | null
          effect_id: string | null
          id: string
          move_id: number | null
          power: string | null
          pp: string | null
          priority: string | null
          target_id: string | null
          type_id: number | null
        }
        Insert: {
          accuracy?: string | null
          changed_in_version_group_id?: number | null
          effect_chance?: string | null
          effect_id?: string | null
          id?: string
          move_id?: number | null
          power?: string | null
          pp?: string | null
          priority?: string | null
          target_id?: string | null
          type_id?: number | null
        }
        Update: {
          accuracy?: string | null
          changed_in_version_group_id?: number | null
          effect_chance?: string | null
          effect_id?: string | null
          id?: string
          move_id?: number | null
          power?: string | null
          pp?: string | null
          priority?: string | null
          target_id?: string | null
          type_id?: number | null
        }
        Relationships: []
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "move_effect_changelog_changed_in_version_group_id_fkey"
            columns: ["changed_in_version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_effect_changelog_effect_id_fkey"
            columns: ["effect_id"]
            isOneToOne: false
            referencedRelation: "move_effects"
            referencedColumns: ["id"]
          }
        ]
      }
      move_effects: {
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "move_flag_map_move_flag_id_fkey"
            columns: ["move_flag_id"]
            isOneToOne: false
            referencedRelation: "move_flags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_flag_map_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
      }
      move_flavor_text: {
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
        Relationships: [
          {
            foreignKeyName: "move_flavor_text_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_flavor_text_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      move_meta: {
        Row: {
          ailment_chance: string | null
          crit_rate: string | null
          drain: string | null
          flinch_chance: string | null
          healing: string | null
          id: string
          max_hits: string | null
          max_turns: string | null
          meta_ailment_id: string | null
          meta_category_id: string | null
          min_hits: string | null
          min_turns: string | null
          move_id: number | null
          stat_chance: string | null
        }
        Insert: {
          ailment_chance?: string | null
          crit_rate?: string | null
          drain?: string | null
          flinch_chance?: string | null
          healing?: string | null
          id?: string
          max_hits?: string | null
          max_turns?: string | null
          meta_ailment_id?: string | null
          meta_category_id?: string | null
          min_hits?: string | null
          min_turns?: string | null
          move_id?: number | null
          stat_chance?: string | null
        }
        Update: {
          ailment_chance?: string | null
          crit_rate?: string | null
          drain?: string | null
          flinch_chance?: string | null
          healing?: string | null
          id?: string
          max_hits?: string | null
          max_turns?: string | null
          meta_ailment_id?: string | null
          meta_category_id?: string | null
          min_hits?: string | null
          min_turns?: string | null
          move_id?: number | null
          stat_chance?: string | null
        }
        Relationships: []
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
        Relationships: []
      }
      move_meta_categories: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
        }
        Relationships: []
      }
      move_meta_stat_changes: {
        Row: {
          change: number | null
          move_id: number | null
          stat_id: number | null
        }
        Insert: {
          change?: number | null
          move_id?: number | null
          stat_id?: number | null
        }
        Update: {
          change?: number | null
          move_id?: number | null
          stat_id?: number | null
        }
        Relationships: []
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
        Relationships: []
      }
      moves: {
        Row: {
          accuracy: number | null
          contest_effect_id: number | null
          contest_type_id: number | null
          damage_class_id: number | null
          effect_chance: number | null
          effect_id: number | null
          generation_id: number | null
          id: number
          identifier: string | null
          name: string | null
          power: number | null
          pp: number | null
          priority: number | null
          super_contest_effect_id: number | null
          target_id: number | null
          type_id: number | null
        }
        Insert: {
          accuracy?: number | null
          contest_effect_id?: number | null
          contest_type_id?: number | null
          damage_class_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          super_contest_effect_id?: number | null
          target_id?: number | null
          type_id?: number | null
        }
        Update: {
          accuracy?: number | null
          contest_effect_id?: number | null
          contest_type_id?: number | null
          damage_class_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          super_contest_effect_id?: number | null
          target_id?: number | null
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "moves_contest_effect_id_fkey"
            columns: ["contest_effect_id"]
            isOneToOne: false
            referencedRelation: "contest_effects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moves_contest_type_id_fkey"
            columns: ["contest_type_id"]
            isOneToOne: false
            referencedRelation: "contest_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moves_damage_class_id_fkey"
            columns: ["damage_class_id"]
            isOneToOne: false
            referencedRelation: "move_damage_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moves_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moves_super_contest_effect_id_fkey"
            columns: ["super_contest_effect_id"]
            isOneToOne: false
            referencedRelation: "super_contest_effects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moves_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "move_targets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moves_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "nature_battle_style_preferences_nature_id_fkey"
            columns: ["nature_id"]
            isOneToOne: false
            referencedRelation: "natures"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "nature_pokeathlon_stats_nature_id_fkey"
            columns: ["nature_id"]
            isOneToOne: false
            referencedRelation: "natures"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nature_pokeathlon_stats_pokeathlon_stat_id_fkey"
            columns: ["pokeathlon_stat_id"]
            isOneToOne: false
            referencedRelation: "pokeathlon_stats"
            referencedColumns: ["id"]
          }
        ]
      }
      natures: {
        Row: {
          decreased_stat_id: number | null
          game_index: number | null
          hates_flavor_id: number | null
          id: number
          identifier: string | null
          increased_stat_id: number | null
          likes_flavor_id: number | null
          name: string | null
        }
        Insert: {
          decreased_stat_id?: number | null
          game_index?: number | null
          hates_flavor_id?: number | null
          id: number
          identifier?: string | null
          increased_stat_id?: number | null
          likes_flavor_id?: number | null
          name?: string | null
        }
        Update: {
          decreased_stat_id?: number | null
          game_index?: number | null
          hates_flavor_id?: number | null
          id?: number
          identifier?: string | null
          increased_stat_id?: number | null
          likes_flavor_id?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "natures_decreased_stat_id_fkey"
            columns: ["decreased_stat_id"]
            isOneToOne: false
            referencedRelation: "stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "natures_increased_stat_id_fkey"
            columns: ["increased_stat_id"]
            isOneToOne: false
            referencedRelation: "stats"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pal_park_species_id_fkey"
            columns: ["species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          }
        ]
      }
      pal_park_areas: {
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
        Relationships: []
      }
      pokeathlon_stats: {
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "pokedex_version_groups_pokedex_id_fkey"
            columns: ["pokedex_id"]
            isOneToOne: false
            referencedRelation: "pokedexes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokedex_version_groups_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pokedexes_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon: {
        Row: {
          base_experience: number | null
          height: number | null
          id: number
          identifier: string | null
          is_default: boolean | null
          species_id: number | null
          weight: number | null
        }
        Insert: {
          base_experience?: number | null
          height?: number | null
          id: number
          identifier?: string | null
          is_default?: boolean | null
          species_id?: number | null
          weight?: number | null
        }
        Update: {
          base_experience?: number | null
          height?: number | null
          id?: number
          identifier?: string | null
          is_default?: boolean | null
          species_id?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_species_id_fkey"
            columns: ["species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_abilities: {
        Row: {
          ability_id: number | null
          id: string
          is_hidden: boolean | null
          pokemon_id: number | null
          slot: number | null
        }
        Insert: {
          ability_id?: number | null
          id?: string
          is_hidden?: boolean | null
          pokemon_id?: number | null
          slot?: number | null
        }
        Update: {
          ability_id?: number | null
          id?: string
          is_hidden?: boolean | null
          pokemon_id?: number | null
          slot?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_abilities_ability_id_fkey"
            columns: ["ability_id"]
            isOneToOne: false
            referencedRelation: "abilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_abilities_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_abilities_past: {
        Row: {
          ability_id: number | null
          generation_id: number | null
          id: string
          is_hidden: boolean | null
          pokemon_id: number | null
          slot: number | null
        }
        Insert: {
          ability_id?: number | null
          generation_id?: number | null
          id?: string
          is_hidden?: boolean | null
          pokemon_id?: number | null
          slot?: number | null
        }
        Update: {
          ability_id?: number | null
          generation_id?: number | null
          id?: string
          is_hidden?: boolean | null
          pokemon_id?: number | null
          slot?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_abilities_past_ability_id_fkey"
            columns: ["ability_id"]
            isOneToOne: false
            referencedRelation: "abilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_abilities_past_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_abilities_past_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_colors: {
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "pokemon_dex_numbers_pokedex_id_fkey"
            columns: ["pokedex_id"]
            isOneToOne: false
            referencedRelation: "pokedexes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_dex_numbers_species_id_fkey"
            columns: ["species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pokemon_egg_groups_egg_group_id_fkey"
            columns: ["egg_group_id"]
            isOneToOne: false
            referencedRelation: "egg_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_egg_groups_species_id_fkey"
            columns: ["species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_evolution: {
        Row: {
          evolution_trigger_id: number | null
          evolved_species_id: number | null
          gender_id: number | null
          held_item_id: number | null
          id: number
          known_move_id: number | null
          known_move_type_id: number | null
          location_id: string | null
          minimum_affection: number | null
          minimum_beauty: number | null
          minimum_happiness: number | null
          minimum_level: number | null
          needs_overworld_rain: boolean | null
          party_species_id: number | null
          party_type_id: number | null
          relative_physical_stats: number | null
          time_of_day: string | null
          trade_species_id: number | null
          trigger_item_id: number | null
          turn_upside_down: boolean | null
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
          minimum_affection?: number | null
          minimum_beauty?: number | null
          minimum_happiness?: number | null
          minimum_level?: number | null
          needs_overworld_rain?: boolean | null
          party_species_id?: number | null
          party_type_id?: number | null
          relative_physical_stats?: number | null
          time_of_day?: string | null
          trade_species_id?: number | null
          trigger_item_id?: number | null
          turn_upside_down?: boolean | null
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
          minimum_affection?: number | null
          minimum_beauty?: number | null
          minimum_happiness?: number | null
          minimum_level?: number | null
          needs_overworld_rain?: boolean | null
          party_species_id?: number | null
          party_type_id?: number | null
          relative_physical_stats?: number | null
          time_of_day?: string | null
          trade_species_id?: number | null
          trigger_item_id?: number | null
          turn_upside_down?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_evolution_evolved_species_id_fkey"
            columns: ["evolved_species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_gender_id_fkey"
            columns: ["gender_id"]
            isOneToOne: false
            referencedRelation: "genders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_held_item_id_fkey"
            columns: ["held_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_known_move_id_fkey"
            columns: ["known_move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_known_move_type_id_fkey"
            columns: ["known_move_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_party_species_id_fkey"
            columns: ["party_species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_party_type_id_fkey"
            columns: ["party_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_trade_species_id_fkey"
            columns: ["trade_species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_evolution_trigger_item_id_fkey"
            columns: ["trigger_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_form_generations: {
        Row: {
          game_index: number | null
          generation_id: number | null
          id: string
          pokemon_form_id: number | null
        }
        Insert: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          pokemon_form_id?: number | null
        }
        Update: {
          game_index?: number | null
          generation_id?: number | null
          id?: string
          pokemon_form_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_form_generations_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_form_generations_pokemon_form_id_fkey"
            columns: ["pokemon_form_id"]
            isOneToOne: false
            referencedRelation: "pokemon_forms"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pokemon_form_pokeathlon_stats_pokeathlon_stat_id_fkey"
            columns: ["pokeathlon_stat_id"]
            isOneToOne: false
            referencedRelation: "pokeathlon_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_form_pokeathlon_stats_pokemon_form_id_fkey"
            columns: ["pokemon_form_id"]
            isOneToOne: false
            referencedRelation: "pokemon_forms"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_form_types: {
        Row: {
          id: string
          pokemon_form_id: number | null
          slot: number | null
          type_id: number | null
        }
        Insert: {
          id?: string
          pokemon_form_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
        Update: {
          id?: string
          pokemon_form_id?: number | null
          slot?: number | null
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_form_types_pokemon_form_id_fkey"
            columns: ["pokemon_form_id"]
            isOneToOne: false
            referencedRelation: "pokemon_forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_form_types_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_forms: {
        Row: {
          form_identifier: string | null
          form_name: string | null
          form_order: number | null
          id: number
          identifier: string | null
          introduced_in_version_group_id: number | null
          is_battle_only: boolean | null
          is_default: boolean | null
          is_mega: boolean | null
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
          is_battle_only?: boolean | null
          is_default?: boolean | null
          is_mega?: boolean | null
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
          is_battle_only?: boolean | null
          is_default?: boolean | null
          is_mega?: boolean | null
          order?: number | null
          pokemon_id?: number | null
          pokemon_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_forms_introduced_in_version_group_id_fkey"
            columns: ["introduced_in_version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_forms_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_game_indices: {
        Row: {
          game_index: number | null
          pokemon_id: number | null
          version_id: number | null
        }
        Insert: {
          game_index?: number | null
          pokemon_id?: number | null
          version_id?: number | null
        }
        Update: {
          game_index?: number | null
          pokemon_id?: number | null
          version_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_game_indices_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_game_indices_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "versions"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "pokemon_items_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_items_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_items_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "versions"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "pokemon_moves_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_moves_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_moves_pokemon_move_method_id_fkey"
            columns: ["pokemon_move_method_id"]
            isOneToOne: false
            referencedRelation: "pokemon_move_methods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_moves_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      pokemon_shapes: {
        Row: {
          description: string | null
          id: number
          identifier: string | null
          name: string | null
          scientific_name: string | null
        }
        Insert: {
          description?: string | null
          id: number
          identifier?: string | null
          name?: string | null
          scientific_name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          identifier?: string | null
          name?: string | null
          scientific_name?: string | null
        }
        Relationships: []
      }
      pokemon_species: {
        Row: {
          base_happiness: number | null
          capture_rate: number | null
          color_id: number | null
          evolution_chain_id: number | null
          evolves_from_species_id: number | null
          forms_switchable: boolean | null
          gender_rate: number | null
          generation_id: number | null
          genus: string | null
          growth_rate_id: number | null
          habitat_id: number | null
          has_gender_differences: boolean | null
          hatch_counter: number | null
          id: number
          identifier: string | null
          is_baby: boolean | null
          is_legendary: boolean | null
          is_mythical: boolean | null
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
          forms_switchable?: boolean | null
          gender_rate?: number | null
          generation_id?: number | null
          genus?: string | null
          growth_rate_id?: number | null
          habitat_id?: number | null
          has_gender_differences?: boolean | null
          hatch_counter?: number | null
          id: number
          identifier?: string | null
          is_baby?: boolean | null
          is_legendary?: boolean | null
          is_mythical?: boolean | null
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
          forms_switchable?: boolean | null
          gender_rate?: number | null
          generation_id?: number | null
          genus?: string | null
          growth_rate_id?: number | null
          habitat_id?: number | null
          has_gender_differences?: boolean | null
          hatch_counter?: number | null
          id?: number
          identifier?: string | null
          is_baby?: boolean | null
          is_legendary?: boolean | null
          is_mythical?: boolean | null
          name?: string | null
          order?: number | null
          shape_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pokemon_species_evolves_from_species_id_fkey"
            columns: ["evolves_from_species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_species_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_species_growth_rate_id_fkey"
            columns: ["growth_rate_id"]
            isOneToOne: false
            referencedRelation: "growth_rates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_species_shape_id_fkey"
            columns: ["shape_id"]
            isOneToOne: false
            referencedRelation: "pokemon_shapes"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pokemon_species_flavor_text_species_id_fkey"
            columns: ["species_id"]
            isOneToOne: false
            referencedRelation: "pokemon_species"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_species_flavor_text_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "versions"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pokemon_stats_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_stats_stat_id_fkey"
            columns: ["stat_id"]
            isOneToOne: false
            referencedRelation: "stats"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pokemon_types_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_types_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "pokemon_types_past_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_types_past_pokemon_id_fkey"
            columns: ["pokemon_id"]
            isOneToOne: false
            referencedRelation: "pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pokemon_types_past_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
      }
      regions: {
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
        Relationships: []
      }
      stats: {
        Row: {
          damage_class_id: number | null
          game_index: number | null
          id: number
          identifier: string | null
          is_battle_only: boolean | null
          name: string | null
        }
        Insert: {
          damage_class_id?: number | null
          game_index?: number | null
          id: number
          identifier?: string | null
          is_battle_only?: boolean | null
          name?: string | null
        }
        Update: {
          damage_class_id?: number | null
          game_index?: number | null
          id?: number
          identifier?: string | null
          is_battle_only?: boolean | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stats_damage_class_id_fkey"
            columns: ["damage_class_id"]
            isOneToOne: false
            referencedRelation: "move_damage_classes"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "super_contest_combos_first_move_id_fkey"
            columns: ["first_move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "super_contest_combos_second_move_id_fkey"
            columns: ["second_move_id"]
            isOneToOne: false
            referencedRelation: "moves"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: []
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
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "type_efficacy_past_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "type_game_indices_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "type_game_indices_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "types_damage_class_id_fkey"
            columns: ["damage_class_id"]
            isOneToOne: false
            referencedRelation: "move_damage_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "types_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "version_group_pokemon_move_methods_pokemon_move_method_id_fkey"
            columns: ["pokemon_move_method_id"]
            isOneToOne: false
            referencedRelation: "pokemon_move_methods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "version_group_pokemon_move_methods_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      version_group_regions: {
        Row: {
          id: string
          region_id: number | null
          version_group_id: number | null
        }
        Insert: {
          id?: string
          region_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          id?: string
          region_id?: number | null
          version_group_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "version_group_regions_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "version_group_regions_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      version_groups: {
        Row: {
          generation_id: number | null
          id: number
          identifier: string | null
          name: string | null
          order: number | null
        }
        Insert: {
          generation_id?: number | null
          id: number
          identifier?: string | null
          name?: string | null
          order?: number | null
        }
        Update: {
          generation_id?: number | null
          id?: number
          identifier?: string | null
          name?: string | null
          order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "version_groups_generation_id_fkey"
            columns: ["generation_id"]
            isOneToOne: false
            referencedRelation: "generations"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "versions_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_groups"
            referencedColumns: ["id"]
          }
        ]
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

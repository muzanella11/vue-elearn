<template>
  <v-layout row wrap>
    <v-flex xs12 class="mb-3">
      <v-card>
        <v-card-title class="blue lighten-1">
          <span class="headline white--text">
            Header
          </span>
        </v-card-title>
        <v-card-text>
          content
        </v-card-text>
        <v-card-row class="white">
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-flex>

    <v-flex xs12 class="mb-3">
      <v-card>
        <v-card-title class="blue lighten-1">
          <span class="headline white--text">
            Input With Label
          </span>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Normal with hint text/label</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-1"
                  label="Label Text"
                  id="testing"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Focus</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-2"
                  label="Label Text"
                  value="Input text"
                  class="input-group--focused"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Normal with input text + label</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Label Text"
                  value="Input text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Disabled</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Label Text"
                  value="Input text"
                  disabled
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-row class="white">
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-flex>

    <v-flex xs12 class="mb-3">
      <v-card>
        <v-card-title class="blue lighten-1">
          <span class="headline white--text">
            Input Single Line
          </span>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Normal with hint text</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-1-3"
                  label="Hint Text"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Press</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-2-3"
                  label="Hint Text"
                  class="input-group--focused"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Focus</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3-3"
                  label="Hint Text"
                  value="Input text"
                  class="input-group--focused"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Normal with input text</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3-4"
                  label="Hint Text"
                  value="Input text"
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Error</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3-5"
                  label="Hint Text"
                  value="Input text"
                  error
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Disabled</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Label Text"
                  value="Input text"
                  disabled
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-row class="white">
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-flex>

    <v-flex xs12>
      <v-card>
        <v-card-title class="blue lighten-1">
          <span class="headline white--text">
            Input
          </span>
        </v-card-title>
        <v-card-text>
          content
        </v-card-text>
        <v-card-row class="white">
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        //
      }
    }
  }
</script>


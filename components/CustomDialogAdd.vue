
<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pa-md custom-dialog">

      <div class="row justify-end">
        <q-btn 
          icon="close" 
          flat 
          dense 
          class="close-button"
          @click="onDialogHide"
        />
      </div>

      

      <q-card-section>
        <div class="text-h6">Add new organization</div>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <AddOrganizationStepper @close-dialog="onDialogHide"  />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

  
  <script>
  import { useDialogPluginComponent } from 'quasar'
  
  export default {
    props: {
        message: {
            type: String,
            required: true 
        }
    },
  
    emits: [
      // REQUIRED; need to specify some events that your
      // component will emit through useDialogPluginComponent()
      ...useDialogPluginComponent.emits
    ],
  
    setup (props) {
      // REQUIRED; must be called inside of setup()
      const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
      // dialogRef      - Vue ref to be applied to QDialog
      // onDialogHide   - Function to be used as handler for @hide on QDialog
      // onDialogOK     - Function to call to settle dialog with "ok" outcome
      //                    example: onDialogOK() - no payload
      //                    example: onDialogOK({ /*.../* }) - with payload
      // onDialogCancel - Function to call to settle dialog with "cancel" outcome

      console.log(props.message)
  
      return {
        // This is REQUIRED;
        // Need to inject these (from useDialogPluginComponent() call)
        // into the vue scope for the vue html template
        dialogRef,
        onDialogHide,
  
        // other methods that we used in our vue html template;
        // these are part of our example (so not required)
        onOKClick () {
          // on OK, it is REQUIRED to
          // call onDialogOK (with optional payload)
          onDialogOK()
          // or with payload: onDialogOK({ ... })
          // ...and it will also hide the dialog automatically
        },
  
        // we can passthrough onDialogCancel directly
        onCancelClick: onDialogCancel
      }
    }
  }
  </script>

<style scoped>
  .custom-dialog {
    width: 90%; 
    max-width: 60vw; 
  }
</style>
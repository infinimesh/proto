// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: handsfree/handsfree.proto

package handsfree

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on ConnectionRequest with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *ConnectionRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ConnectionRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ConnectionRequestMultiError, or nil if none found.
func (m *ConnectionRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *ConnectionRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for AppId

	if len(errors) > 0 {
		return ConnectionRequestMultiError(errors)
	}

	return nil
}

// ConnectionRequestMultiError is an error wrapping multiple validation errors
// returned by ConnectionRequest.ValidateAll() if the designated constraints
// aren't met.
type ConnectionRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ConnectionRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ConnectionRequestMultiError) AllErrors() []error { return m }

// ConnectionRequestValidationError is the validation error returned by
// ConnectionRequest.Validate if the designated constraints aren't met.
type ConnectionRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ConnectionRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ConnectionRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ConnectionRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ConnectionRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ConnectionRequestValidationError) ErrorName() string {
	return "ConnectionRequestValidationError"
}

// Error satisfies the builtin error interface
func (e ConnectionRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sConnectionRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ConnectionRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ConnectionRequestValidationError{}

// Validate checks the field values on ControlPacket with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *ControlPacket) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ControlPacket with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in ControlPacketMultiError, or
// nil if none found.
func (m *ControlPacket) ValidateAll() error {
	return m.validate(true)
}

func (m *ControlPacket) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Code

	if m.AppId != nil {
		// no validation rules for AppId
	}

	if len(errors) > 0 {
		return ControlPacketMultiError(errors)
	}

	return nil
}

// ControlPacketMultiError is an error wrapping multiple validation errors
// returned by ControlPacket.ValidateAll() if the designated constraints
// aren't met.
type ControlPacketMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ControlPacketMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ControlPacketMultiError) AllErrors() []error { return m }

// ControlPacketValidationError is the validation error returned by
// ControlPacket.Validate if the designated constraints aren't met.
type ControlPacketValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ControlPacketValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ControlPacketValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ControlPacketValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ControlPacketValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ControlPacketValidationError) ErrorName() string { return "ControlPacketValidationError" }

// Error satisfies the builtin error interface
func (e ControlPacketValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sControlPacket.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ControlPacketValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ControlPacketValidationError{}